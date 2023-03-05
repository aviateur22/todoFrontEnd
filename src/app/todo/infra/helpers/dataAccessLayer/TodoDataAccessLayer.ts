import { EventEmitter } from "@angular/core";
import { TodoEntity } from "src/app/todo/domain/entities/todo/TodoEntity";
import { AddTodoSchema } from "src/app/todo/domain/ports/todoSchema/AddTodoSchema";

import { UpdateTodoSchema } from "src/app/todo/domain/ports/todoSchema/UpdateTodoSchema";
import { UseCaseServiceImp } from "src/app/todo/domain/services/UseCaseServiceImp";

export class TodoDataAccessLayer {

  static todos: Array<TodoEntity> = [];

  /**
   * 
   * @param isTodoToUpdate 
   * @param title 
   * @param description 
   * @param id 
   */
  addOrEditTodo(findAllTodos: EventEmitter<any>, isTodoToUpdate: boolean, title: string, description: string, id: string = '' ) {
  
    switch(isTodoToUpdate) {

      // update Todo
      case true:       
        const updateTodo: UpdateTodoSchema = {
          id,
          title,
          description
        }
        this.updateTodo(updateTodo);      
      break;

      // Ajout d'une Todo
      case false:
        const addTodo: AddTodoSchema = {
          title,
          description
        }
        this.addTodo(addTodo, findAllTodos);
      break;
    }    
   
  }

  /**
   * Ajout d'un nouvelle Todo
   * @param {AddTodoSchema} todo 
   */
  addTodo(todo: AddTodoSchema, findAllTodos: EventEmitter<any>) {  
    console.log(todo);  
    UseCaseServiceImp.getUseCasesServiceImp().addTodoUseCase.execute(todo).subscribe(t=>findAllTodos.emit());
  }


  /**
   * Mise a jour d'une Todo
   * @param {UpdateTodoSchema} todo 
   */
  updateTodo(todo: UpdateTodoSchema) {
    UseCaseServiceImp.getUseCasesServiceImp().updateOneTodoUseCase.execute(todo).subscribe();
  }
  
    // /**
    //  * Recherche de 1 Todo
    //  * @param {FindOneTodoSchema} todo
    //  * @returns {Observable<TodoEntity>}
    //  */
    // findOneTodo(todo: FindOneTodoSchema): Observable<any> {
    //   const subject = new Subject<TodoEntity>();
    //   UseCaseServiceImp.getUseCasesServiceImp().findOneTodoUseCase.execute(todo).subscribe((todo: any)=>{
  
    //     // Exception si todo pas trouvé
    //     if(!todo) {
    //       throw new Error('todo not find');
    //     }
        

    //     switch(Object.keys(todo).length > 2) {
    //     // MockBackend
    //     case true:
    //       console.log(todo)
    //       subject.next(todo); 
    //     break;
  
    //       // LocalBackend-WebServer
    //     case false: 
    //       console.log(todo.todo)
    //       subject.next(todo.todo);
    //     break;
    //     }
    //   });
    //   console.log(subject.asObservable())
    //   return subject.asObservable();
    // }

  /**
   * Récupération des Todos
   * @param {Array<TodoEntity>} todos
   */
  findAllTodos(): void {
    UseCaseServiceImp.getUseCasesServiceImp().findAllTodoUseCase.execute().subscribe((todos: any)=>{
     
      switch(Array.isArray(todos)) {
      // MockBackend
      case true: 
      TodoDataAccessLayer.todos = todos; 
      break;

      // LocalBackend-WebServer
      case false: 
      TodoDataAccessLayer.todos =  todos.todos; 
      break;
      }

      console.log(TodoDataAccessLayer.todos )
    });
  }

  /**
   * 
   * @returns 
   */
  static getTodo(): Array<TodoEntity> {
    return TodoDataAccessLayer.todos
  }
}