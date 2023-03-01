import { AddTodoUseCase } from "../../useCases/AddTodoUseCase";
import { CheckToggleUseCase } from "../../useCases/CheckToggleUseCase";
import { DeleteOneTodoUseCase } from "../../useCases/DeleteTodoUsecase";
import { FindAllTodoUseCase } from "../../useCases/FindAllTodoUseCase";
import { FindOneTodoUseCase } from "../../useCases/FindOneTodoUseCase";
import { UpdateOneTodoUseCase } from "../../useCases/UpdateTodoUseCase";

/**
 * Service UseCase
 */
export class UseCases {
  readonly findAllTodoUseCase: FindAllTodoUseCase;
  readonly findOneTodoUseCase: FindOneTodoUseCase;
  readonly deleteOneTodoUseCase: DeleteOneTodoUseCase;
  readonly addTodoUseCase: AddTodoUseCase;
  readonly updateOneTodoUseCase: UpdateOneTodoUseCase;
  readonly checkToggleTodoUseCase: CheckToggleUseCase;  

  constructor() {
    this.addTodoUseCase = new AddTodoUseCase();
    this.checkToggleTodoUseCase = new CheckToggleUseCase();
    this.deleteOneTodoUseCase = new DeleteOneTodoUseCase();
    this.findAllTodoUseCase = new FindAllTodoUseCase();
    this.findOneTodoUseCase = new FindOneTodoUseCase();
    this.updateOneTodoUseCase = new UpdateOneTodoUseCase();
  }
}