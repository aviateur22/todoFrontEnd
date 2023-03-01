import { TodoApiSchema } from "src/app/todo/domain/ports/apiSchemas/TodoApiSchema";

/**
 * Model de backEnd
 */
export class BackendApi {
  
  // Todo
  readonly todoApi: TodoApiSchema;

  constructor(todoApi: TodoApiSchema) {
    this.todoApi = todoApi;
  }
}