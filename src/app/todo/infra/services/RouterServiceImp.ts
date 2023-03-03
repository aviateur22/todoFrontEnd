import { RouterServiceException } from "../../exceptions/RouterServiceException";
import { RouterSourceSelection } from "../helpers/router/RouterSourceSelection";
import { RouterSchema } from "../ports/router/RouterSchema";

/**
 * Emplementation router
 */
export class RouterServiceImp {
 
  constructor(private routerSourceSelection: RouterSourceSelection) {}

  static router: RouterSchema;

  /**
   * Selection du router
   * @param { number } routerSource 
   */
  setRouter(routerSource: number): void {
    RouterServiceImp.router = this.routerSourceSelection.setRouter(routerSource);
  }

  /**
   * Retourn la source des requetes
   * @returns {HttpSchema}
   */
  static getRouter(): RouterSchema {    
    if(typeof RouterServiceImp.router === 'undefined') {
      throw new RouterServiceException('no router service selected');
    }
    return RouterServiceImp.router;
  }
}