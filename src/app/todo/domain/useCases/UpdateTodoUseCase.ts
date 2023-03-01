import { Observable } from "rxjs";
import { TodoEntity } from "../entities/todo/TodoEntity";
import { UpdateTodoSchema } from "../ports/todoSchema/UpdateTodoSchema";
import { UseCaseModel } from "./UseCaseModel";

/**
 * UseCase - Update Todo
 */
export class UpdateOneTodoUseCase extends UseCaseModel {

  /**
   * Update d'une todo
   * @param {DeleteOneTodoSchema} todo
   * @returns {TodoEntity}
   */
  execute(todo: UpdateTodoSchema): Observable<TodoEntity> {
    return this.todoBackendApi.updateOneTodo(todo);
  }
}