import { Observable } from "rxjs";
import { TodoEntity } from "src/app/todo/domain/entities/todo/TodoEntity";
import { TodoApiSchema } from "src/app/todo/domain/ports/apiSchemas/TodoApiSchema";
import { AddTodoSchema } from "src/app/todo/domain/ports/todoSchema/AddTodoSchema";
import { CheckToggleTodoSchema } from "src/app/todo/domain/ports/todoSchema/CheckToggleTodoSchema";
import { DeleteOneTodoSchema } from "src/app/todo/domain/ports/todoSchema/DeleteOneTodoSchema";
import { FindOneTodoSchema } from "src/app/todo/domain/ports/todoSchema/FindOneTodoSchema";
import { UpdateTodoSchema } from "src/app/todo/domain/ports/todoSchema/UpdateTodoSchema";
import { EnvironmentServiceImp } from "../../../services/EnvironmentServiceImp";
import { HttpServiceImp } from "../../../services/HttpServiceImp";

/**
 * Récupération Todo via serverLocal
 */
export class TodoServerApi implements TodoApiSchema {
  // Domain
  private domain = EnvironmentServiceImp.getEnvironment().domain;

  // Api
  private api = EnvironmentServiceImp.getEnvironment().api;

  //private uri = 'https://my-todos-app.herokuapp.com/api/v1/todo';
  private uri = this.domain + this.api;


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

  /**
   * Recherche de 1 Todo
   * @param {FindOneTodoSchema} todo 
   */
  findOneTodo(todo: FindOneTodoSchema): Observable<TodoEntity | null> {
    return HttpServiceImp.getHttp().get(this.uri + '/' + todo.id);
  }

  /**
   * Mise a jour d'une Todo
   * @param {UpdateTodoSchema} todo 
   */
  updateOneTodo(todo: UpdateTodoSchema): Observable<TodoEntity> {
    return HttpServiceImp.getHttp().patch(this.uri + '/' + todo.id, todo);
  }
  
  /**
   * Suppression d'une Todo
   * @param {DeleteOneTodoSchema} todo 
   */
  deleteOneTodo(todo: DeleteOneTodoSchema): Observable<boolean | TodoEntity> {
    return HttpServiceImp.getHttp().delete(this.uri + '/' + todo.id);
  }

  /**
   * Mise a jour du statut d'une todo
   * @param todo 
   */
  checkToggleTodo(todo: CheckToggleTodoSchema): Observable<TodoEntity> {
    return HttpServiceImp.getHttp().patch(this.uri + '/toggle-check/' + todo.id, todo);
  }
 
  
}