import { TodoLocalApi } from "../../backendApi/local/TodoLocalApi";
import { TodoMockApi } from "../../backendApi/mock/TodoMockApi";
import { TodoWebApi } from "../../backendApi/web/TodoWebApi";
import { BackendApi } from "./BackendApi";
import { BackendApiSource } from "./BackendSource";

export class BackendSourceApiSelection { 

  constructor (
    private todoLocalApi: TodoLocalApi,
    private todoWebApi: TodoWebApi,
    private todoMockApi: TodoMockApi

  ) {

  }

  /**
   * Selection du backend
   * @param backendApiSource 
   */
  setBackend(backendApiSource: number): BackendApi { 
    switch (backendApiSource) {
      case BackendApiSource.webBackEndApi:
        return this.webBackendApi();
      break;
      case BackendApiSource.mockBackendApi:
        return this.mockBackendApi();  
      break;
      case BackendApiSource.localBackEndApi:
        return this.localBackendApi();
      break;
      default:
        return this.mockBackendApi();
      break;      
    }
  }

  /**
   * Selection MockApi
   * @returns { BackendApi }
   */
  private mockBackendApi(): BackendApi {
    //const todoBackendApi: TodoApiSchema = new TodoMockApi();
    return new BackendApi(this.todoMockApi);
  }

  /**
   * Selection WebApi
   * @returns { BackendApi }
   */
  private webBackendApi(): BackendApi {
    //const todoBackendApi: TodoApiSchema = new TodoWebApi();
    return new BackendApi(this.todoWebApi);
  }

  /**
   * Selection localServerApi
   *  @returns { BackendApi }
   */
  private localBackendApi(): BackendApi {
    return new BackendApi(this.todoLocalApi);
  }
}