import { Observable } from "rxjs";
import { TodoEntity } from "../entities/todo/TodoEntity";
import { DeleteOneTodoSchema } from "../ports/todoSchema/DeleteOneTodoSchema";
import { UseCaseModel } from "./UseCaseModel";

/**
 * UseCase - Delete
 */
export class DeleteOneTodoUseCase extends UseCaseModel {

  /**
   * Suppr. d'une todo
   * @param {DeleteOneTodoSchema} todo
   * @returns {TodoEntity}
   */
  execute(todo: DeleteOneTodoSchema): Observable<boolean|TodoEntity> {
    return this.todoBackendApi.deleteOneTodo(todo);
  }
}