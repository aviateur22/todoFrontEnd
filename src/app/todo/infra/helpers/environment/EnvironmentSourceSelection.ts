import { EnvironmentDevLocalServer } from "src/environments/environment.dev.local-server";
import { EnvironmentDevMockServer } from "src/environments/environment.dev.mock-server";
import { EnvironmentDevWebServer } from "src/environments/environment.dev.web-server";
import { EnvironmentProd } from "src/environments/environment.prod";
import { EnvironmentSchema } from "src/environments/port/EnviromnentSchema";
import { EnvironmentSource } from "./EnvironmentSource";

/**
 * Selection de l'environment
 */
export class EnvironmentSourceSelection {

  /**
   * Selection environment
   * @param {number} environmentSource 
   * @returns {EnvironmentSchema}
   */
  setEnvironment(environmentSource: number): EnvironmentSchema {
    switch (environmentSource) {

      // Dev-MockServer
      case EnvironmentSource.devMockServer:
        
        return new EnvironmentDevMockServer();
      break;
      // Dev-LocalServer
      case EnvironmentSource.devLocalServer:
        return new EnvironmentDevLocalServer();
      break;

      // Dev-webServer
      case EnvironmentSource.devWebServer:
        return new EnvironmentDevWebServer();
      break;

      // Prod
      case EnvironmentSource.prod:
        return new EnvironmentProd();
      break;
        default: throw new Error('environment not implemented');
      break
    }
  }

}