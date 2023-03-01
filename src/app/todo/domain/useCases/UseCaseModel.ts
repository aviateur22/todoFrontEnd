import { ApiServiceImp } from "../../infra/services/ApiServiceImp";
import { TodoApiSchema } from "../ports/apiSchemas/TodoApiSchema";

/**
 * Model UseCase
 */
export class UseCaseModel {
  // Todo backend
  protected todoBackendApi: TodoApiSchema;

  constructor() {
    this.todoBackendApi = ApiServiceImp.getBackendApi().todoApi;
  }
}