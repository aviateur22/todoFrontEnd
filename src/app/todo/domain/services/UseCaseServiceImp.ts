import { UseCases } from "../helpers/useCases/UseCases";

/**
 * Service UseCase
 */
export class UseCaseServiceImp {
  // UseCases
  protected static useCases: UseCases;

 /**
  * Récupération UseCases
  * @returns {UseCases}
  */
  static getUseCasesServiceImp(): UseCases {
    if(typeof UseCaseServiceImp.useCases === 'undefined') {      
      UseCaseServiceImp.useCases = new UseCases();
    }
    return UseCaseServiceImp.useCases;
  }
}