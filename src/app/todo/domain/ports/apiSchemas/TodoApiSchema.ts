import { Observable } from "rxjs";
import { TodoEntity } from "../../entities/todo/TodoEntity";
import { AddTodoSchema } from "../todoSchema/AddTodoSchema";
import { CheckToggleTodoSchema } from "../todoSchema/CheckToggleTodoSchema";
import { DeleteOneTodoSchema } from "../todoSchema/DeleteOneTodoSchema";
import { FindOneTodoSchema } from "../todoSchema/FindOneTodoSchema";
import { UpdateTodoSchema } from "../todoSchema/UpdateTodoSchema";

/**
 * Schema Récupération-Envoie des données
 */
export interface TodoApiSchema {

  /**
   * Ajout d'une Todo
   * @param {AddTodoSchema} todo
   * @returns {Observable<TodoEntity>}
   */  
  saveTodo(todo: AddTodoSchema): Observable<TodoEntity>;

  /**
   * liste des todos
   * @returns {Observable<Array<TodoEntity>>}
   */
  findAllTodo(): Observable<Array<TodoEntity>>;

  /**
   * Recherche Todo par id
   * @param {FindOneTodoSchema} todo
   * @returns {Observable<TodoEntity>}
   */
  findOneTodo(todo: FindOneTodoSchema): Observable<TodoEntity|null>;

  /**
   * Mise a jour d'une Todo
   * @param {UpdateTodoSchema} todo
   * @returns {Observable<TodoEntity>}
   */
  updateOneTodo(todo: UpdateTodoSchema): Observable<TodoEntity>;

  /**
   * Suppr. d'une Todo
   * @param {DeleteOneTodoSchema} todo 
   * @returns {Observable<TodoEntity>}
   */
  deleteOneTodo(todo: DeleteOneTodoSchema): Observable<TodoEntity|boolean>;

  /**
   * Check ou uncheck d'une Todo
   * @param {CheckToggleTodoSchema} todo
   * @returns {Observable<TodoEntity>}
   */
  checkToggleTodo(todo: CheckToggleTodoSchema): Observable<TodoEntity>;
}