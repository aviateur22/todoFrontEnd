import { Observable } from "rxjs";
import { TodoEntity } from "../entities/todo/TodoEntity";
import { FindOneTodoSchema } from "../ports/todoSchema/FindOneTodoSchema";
import { UseCaseModel } from "./UseCaseModel";

/**
 * Renvois la liste des todos
 */
export class FindOneTodoUseCase extends UseCaseModel {

  /**
   * Récupération d'une todos
   * @param {FindOneTodoSchema} todo
   * @returns {TodoEntity}
   */
  execute(todo: FindOneTodoSchema): Observable<TodoEntity|null> {
    return this.todoBackendApi.findOneTodo(todo);
  }
}