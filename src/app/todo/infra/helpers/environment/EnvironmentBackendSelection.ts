import { ApiModels } from "../../backendApi/ApiModels";
import { BackendApi } from "../backend/BackendApi";
import { EnvironmentSource } from "./EnvironmentSource";

/**
 * Selection du type de backend suivant environment
 */
export class EnvironmentBackendSelection { 

  // Api models
  private apiModels: ApiModels;

  constructor (apiModels: ApiModels) {
    this.apiModels = apiModels;
  }

  /**
   * Selection du backend
   * @param backendApiSource 
   */
  setBackend(environmentSource: number): BackendApi { 
    switch (environmentSource) {
      // Dev-MockServer
      case EnvironmentSource.devMockServer:
        
        return this.mockBackendApi();
      break;
      // Dev-LocalServer
      case EnvironmentSource.devLocalServer:
        return this.serverBackendApi();
      break;

      // Dev-webServer
      case EnvironmentSource.devWebServer:
        return this.serverBackendApi();
      break;

      // Prod
      case EnvironmentSource.prod:
        return this.serverBackendApi();
      break;

      default: throw new Error('environment not implemented');
      break;
    }
  }

  /**
   * Selection MockApi
   * @returns { BackendApi }
   */
  private mockBackendApi(): BackendApi {
    //const todoBackendApi: TodoApiSchema = new TodoMockApi();
    return new BackendApi(this.apiModels.todoMockApi);
  }

  /**
   * Selection WebApi
   * @returns { BackendApi }
   */
  private serverBackendApi(): BackendApi {
    //const todoBackendApi: TodoApiSchema = new TodoWebApi();
    return new BackendApi(this.apiModels.todoServerApi);
  }
}