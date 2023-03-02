import { Observable } from "rxjs";
import { TodoEntity } from "../entities/todo/TodoEntity";
import { AddTodoSchema } from "../ports/todoSchema/AddTodoSchema";
import { UseCaseModel } from "./UseCaseModel";

/**
 * UseCase - Update Todo
 */
export class AddTodoUseCase extends UseCaseModel {

  /**
   * Update d'une todo
   * @param {DeleteOneTodoSchema} todo
   * @returns {TodoEntity}
   */
  execute(todo: AddTodoSchema): Observable<TodoEntity> {
    const addTodo = this.todoBackendApi.saveTodo(todo);
    return this.todoBackendApi.saveTodo(todo);
  }
}