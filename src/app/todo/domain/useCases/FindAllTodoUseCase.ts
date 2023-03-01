import { Observable } from "rxjs";
import { TodoEntity } from "../entities/todo/TodoEntity";
import { UseCaseModel } from "./UseCaseModel";

/**
 * Renvois la liste des todos
 */
export class FindAllTodoUseCase extends UseCaseModel {

  /**
   * Récupération des todos
   * @returns 
   */
  execute(): Observable<TodoEntity[]> {
    return this.todoBackendApi.findAllTodo()
  }
}