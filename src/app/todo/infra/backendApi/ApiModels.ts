import { TodoApiSchema } from "../../domain/ports/apiSchemas/TodoApiSchema";

/**
 * Renvoi les instance des models  
 */
export class ApiModels {

  // Models Todo
  readonly todoMockApi: TodoApiSchema;
  readonly todoServerApi: TodoApiSchema;
  
  constructor(todoMockApi: TodoApiSchema, todoServerApi: TodoApiSchema){
    this.todoMockApi = todoMockApi;
    this.todoServerApi = todoServerApi
  }
}