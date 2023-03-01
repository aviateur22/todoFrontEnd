import { Observable } from "rxjs";
import { TodoEntity } from "../entities/todo/TodoEntity";
import { CheckToggleTodoSchema } from "../ports/todoSchema/CheckToggleTodoSchema";
import { UseCaseModel } from "./UseCaseModel";

/**
 * UseCase - Update Todo
 */
export class CheckToggleUseCase extends UseCaseModel {

  /**
   * Check-Uncheck d'une todo
   * @param {DeleteOneTodoSchema} todo
   * @returns {TodoEntity}
   */
  execute(todo: CheckToggleTodoSchema): Observable<TodoEntity> {
    return this.todoBackendApi.checkToggleTodo(todo);
  }
}