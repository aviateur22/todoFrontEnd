import { BackendApiServiceException } from "../../exceptions/BackendApiServiceException";
import { BackendApi } from "../helpers/backend/BackendApi";
import { BackendSourceApiSelection } from "../helpers/backend/BackendSourceSelection";


export class ApiServiceImp {

  constructor(private backendSourceApiSelection: BackendSourceApiSelection) {}
  
  // Backend sélectionné
  protected static backendApi: BackendApi;

  /**
   * Selection du backend
   * @param backendApiSource 
   */
  setBackendApi(backendApiSource: number): void {   
    ApiServiceImp.backendApi = this.backendSourceApiSelection.setBackend(backendApiSource);
  }

  /**
   * Selection des repositories en fonction de la source
   * @returns { BackendApi }
   */
  static getBackendApi(): BackendApi {
    if(typeof ApiServiceImp.backendApi === 'undefined') {
      throw new BackendApiServiceException('No backend service Selected');
    }
    console.log(ApiServiceImp.backendApi);
    return ApiServiceImp.backendApi;
  }
}