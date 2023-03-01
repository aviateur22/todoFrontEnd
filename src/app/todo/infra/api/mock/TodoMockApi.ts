import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { TodoEntity } from "../../../domain/entities/todo/TodoEntity";
import { TodoApiSchema } from "../../../domain/ports/apiSchemas/TodoApiSchema";
import { AddTodoSchema } from "../../../domain/ports/todoSchema/AddTodoSchema";
import { CheckToggleTodoSchema } from "../../../domain/ports/todoSchema/CheckToggleTodoSchema";
import { DeleteOneTodoSchema } from "../../../domain/ports/todoSchema/DeleteOneTodoSchema";
import { FindOneTodoSchema } from "../../../domain/ports/todoSchema/FindOneTodoSchema";
import { UpdateTodoSchema } from "../../../domain/ports/todoSchema/UpdateTodoSchema";


@Injectable({
  providedIn: 'root'
})
export class TodoMockApi implements TodoApiSchema {
 
  // Liste des todos
  private todos: Array<TodoEntity> = [
    {
      id: '1',
      title: 'mon titre 1',
      description: 'ma description 1',
      status: false,
      createdAt: new Date('11-12-2023'),
      updatedAt: new Date()
    },
    {
      id: '2',
      title: 'mon titre 2',
      description: 'ma description 2',
      status: true,
      createdAt: new Date('11-12-2023'),
      updatedAt: new Date()
    }
  ];

  /**
   * Ajout d'un todo
   * @param { AddTodoSchema } todo 
   * @returns { Array<TodoEntity> }
   */
  saveTodo(todo: AddTodoSchema): Observable<TodoEntity> {
    // Index
    const index: number = this.todos.length === 0 ? 1 : Math.max(...this.todos.map(x=>Number(x.id))) + 1;

    const todoModel: TodoEntity = new TodoEntity (
      index.toString(),
      todo.title,
      todo.description,
      false,
      new Date(),
      new Date()
    )

    this.todos.push(todoModel);

    return of({
      id: todoModel.id,
      title: todoModel.title,
      description: todoModel.description,
      status: todoModel.status,
      createdAt: todoModel.createdAt,
      updatedAt: todoModel.updatedAt
    })
  }

  /**
   * Mise a jour d'une Todo
   * @param {UpdateTodoSchema} todo 
   * @returns {TodoEntity}
   */
  updateOneTodo(todo: UpdateTodoSchema): Observable<TodoEntity> {   

    // Index
    const index: number = Number(todo.id);
    
    // Modification des propriété
    this.todos[index - 1].title = todo.title;
    this.todos[index - 1].description = todo.description;  
    this.todos[index - 1].updatedAt = new Date();
    
    return of(this.todos[index - 1]);
  }

  /**
   * 
   * @param {CheckToggleTodoSchema} todo 
   * @returns {TodoEntity}
   */
  checkToggleTodo(todo: CheckToggleTodoSchema): Observable<TodoEntity> {
    // Index
    const index: number = Number(todo.id);

    // Modification des propriété
    this.todos[index - 1].status = todo.status;
    this.todos[index - 1].updatedAt = new Date();

   
    return of(this.todos[index - 1]);
  }

  /**
   * Renvoie les todos
   * @returns {Array<TodoEntity>}
   */
  findAllTodo(): Observable<Array<TodoEntity>> {    
    return of(this.todos);
  }

  /**
   * Recherche d'une todo
   * @param {FindOneTodoSchema} todoSchema 
   * @returns {TodoModel|null}
   */
  findOneTodo(todoSchema: FindOneTodoSchema): Observable<TodoEntity|null> {
    const findTodo = this.todos.find(todo => (todoSchema.id === todo.id));
    return typeof findTodo === 'undefined' ?
      of(null) :  
      of(findTodo);
  }

  /**
   * Suppression d'une todo
   * @param {DeleteOneTodoSchema} todoSchema 
   */
  deleteOneTodo(todoSchema: DeleteOneTodoSchema): Observable<TodoEntity|boolean> {
    
    // Recherche de l'index
    const todoIndex: number = this.todos.findIndex(todo=> todo.id === todoSchema.id);    

    const findTodo = this.todos.find(todo => (todoSchema.id === todo.id));

    if(typeof findTodo === 'undefined') {
      return of(false);
    }
    
    // Suppression de la todo
    this.todos.splice(todoIndex, 1);

    return of(findTodo);
  }

  /**
   * Suppression des Todos
   */
  deleteAll(): Observable<boolean> {
    this.todos = [];
    return of(true);
  } 
}