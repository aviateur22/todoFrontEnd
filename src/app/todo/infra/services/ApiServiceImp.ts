import { BackendApiException } from "../../exceptions/BackendApiException";
import { BackendApi } from "../helpers/backend/BackendApi";
import { BackendSourceApiSelection } from "../helpers/backend/BackendSourceSelection";


export class ApiServiceImp {

  constructor(private backendSourceApiSelection: BackendSourceApiSelection) {

  }
  
  // Backend sélectionné
  protected static backendApi: BackendApi;

  /**
   * 
   * @param backendApiSource 
   */
  setBackendApi(backendApiSource: number): void {   
    //const backendSourceApiSelection = new BackendSourceApiSelection();
    ApiServiceImp.backendApi = this.backendSourceApiSelection.setBackend(backendApiSource);

  }

  /**
   * Selection des repositories en fonction de la source
   * @returns { BackendApi }
   */
  static getBackendApi(): BackendApi {
    if(typeof ApiServiceImp.backendApi === 'undefined') {
      throw new BackendApiException('Erreur pas de backend de selectionné')
    }
    console.log(ApiServiceImp.backendApi);
    return ApiServiceImp.backendApi;
  }
}