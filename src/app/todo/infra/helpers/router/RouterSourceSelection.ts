import { RouterSchema } from "../../ports/router/RouterSchema";
import { AngularRouter } from "../../router/AngularRouter";
import { RouterSource } from "./RouterSource";

export class RouterSourceSelection {

  constructor(private angularRouter: AngularRouter) {}
  
  /**
   * Selection du router
   * @param { number } routerSource 
   */
  setRouter(routerSource: number): RouterSchema {
    switch(routerSource) {
      case RouterSource.angularRouter: return this.angularRouter; break;
      default: throw new Error('invalid router selection'); break;
    }
  }
}