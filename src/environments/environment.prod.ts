import { EnvironmentSchema } from "./port/EnviromnentSchema";

/**
 * Dev - webServer
 */
export class EnvironmentProd implements EnvironmentSchema {
  readonly production: boolean = true;
  readonly name: string = 'prod';
  readonly domain: string = 'https://my-todos-app.herokuapp.com/';
  readonly api: string = 'api/v1/todo';
}