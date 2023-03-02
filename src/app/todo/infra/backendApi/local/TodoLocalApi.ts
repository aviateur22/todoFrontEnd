import { map, Observable } from "rxjs";
import { TodoEntity } from "src/app/todo/domain/entities/todo/TodoEntity";
import { TodoApiSchema } from "src/app/todo/domain/ports/apiSchemas/TodoApiSchema";
import { AddTodoSchema } from "src/app/todo/domain/ports/todoSchema/AddTodoSchema";
import { CheckToggleTodoSchema } from "src/app/todo/domain/ports/todoSchema/CheckToggleTodoSchema";
import { DeleteOneTodoSchema } from "src/app/todo/domain/ports/todoSchema/DeleteOneTodoSchema";
import { FindOneTodoSchema } from "src/app/todo/domain/ports/todoSchema/FindOneTodoSchema";
import { UpdateTodoSchema } from "src/app/todo/domain/ports/todoSchema/UpdateTodoSchema";
import { HttpServiceImp } from "../../services/HttpServiceImp";

/**
 * Récupération Todo via serverLocal
 */
export class TodoLocalApi implements TodoApiSchema {  

  private uri = 'http://localhost:4000/api/v1/todo';

  /**
   * Ajout d'une Todo
   * @param {AddTodoSchema  } todo 
   * @returns {Observable<TodoEntity>}
   */
  saveTodo(todo: AddTodoSchema): Observable<TodoEntity> {    
    return HttpServiceImp.getHttp().post(this.uri, todo);
  }

  /**
   * Recherche des Todos
   * @returns {Observable<TodoEntity[]>}
   */
  findAllTodo(): Observable<TodoEntity[]> {
    return HttpServiceImp.getHttp().get(this.uri + '/find-all-todos')
  }

  findOneTodo(todo: FindOneTodoSchema): Observable<TodoEntity | null> {
    throw new Error("Method not implemented.");
  }

  /**
   * 
   * @param todo 
   */
  updateOneTodo(todo: UpdateTodoSchema): Observable<TodoEntity> {
    throw new Error("Method not implemented.");
  }
  deleteOneTodo(todo: DeleteOneTodoSchema): Observable<boolean | TodoEntity> {
    throw new Error("Method not implemented.");
  }

  /**
   * Mise a jour du statut d'une todo
   * @param todo 
   */
  checkToggleTodo(todo: CheckToggleTodoSchema): Observable<TodoEntity> {
    console.log(todo.status);
    return HttpServiceImp.getHttp().patch(this.uri + '/toggle-check/' + todo.id, todo);
  }
 
  
}