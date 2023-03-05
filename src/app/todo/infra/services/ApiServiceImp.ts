import { BackendApiServiceException } from "../../exceptions/BackendApiServiceException";
import { BackendApi } from "../helpers/backend/BackendApi";
import { EnvironmentBackendSelection } from "../helpers/environment/EnvironmentBackendSelection";


export class ApiServiceImp {

  constructor(private environmentBackendSelection: EnvironmentBackendSelection) {}
  
  // Backend sélectionné
  protected static backendApi: BackendApi;

  /**
   * Selection du backend
   * @param backendApiSource 
   */
  setBackendApi(environmentSource: number): void {   
    ApiServiceImp.backendApi = this.environmentBackendSelection.setBackend(environmentSource);
  }

  /**
   * Selection des repositories en fonction de la source
   * @returns { BackendApi }
   */
  static getBackendApi(): BackendApi {
    if(typeof ApiServiceImp.backendApi === 'undefined') {
      throw new BackendApiServiceException('No backend service Selected');
    }
    
    return ApiServiceImp.backendApi;
  }
}