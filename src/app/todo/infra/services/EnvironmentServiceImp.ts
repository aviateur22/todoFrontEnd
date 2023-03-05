import { EnvironmentSchema } from "src/environments/port/EnviromnentSchema";
import { EnvironmentServiceException } from "../../exceptions/EnvironmentServiceException";
import { EnvironmentSourceSelection } from "../helpers/environment/EnvironmentSourceSelection";

/**
 * Selection Environement
 */
export class EnvironmentServiceImp {

  constructor(private environmentSourceSelection: EnvironmentSourceSelection) {}
  
  // Environment de sélectionné
  protected static environment: EnvironmentSchema;

  /**
   * Selection Environment 
   * @param {number} environmentSource 
   */
  setEnvironment(environmentSource: number): void {   
    EnvironmentServiceImp.environment = this.environmentSourceSelection.setEnvironment(environmentSource);
  } 

  /**
   * Renvoie de l'environment
   * @returns {EnvironmentSchema}
   */
  static getEnvironment(): EnvironmentSchema {
    if(typeof EnvironmentServiceImp.environment === 'undefined') {
      throw new EnvironmentServiceException('no environment service selected');
    }
    console.log(EnvironmentServiceImp.environment);
    return EnvironmentServiceImp.environment;
  }
}