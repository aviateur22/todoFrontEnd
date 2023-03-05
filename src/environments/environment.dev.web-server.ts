import { EnvironmentSchema } from "./port/EnviromnentSchema";

/**
 * Dev - webServer
 */
export class EnvironmentDevWebServer implements EnvironmentSchema {
  readonly production: boolean = false;
  readonly name: string = 'dev';
  readonly domain: string = 'https://my-todos-app.herokuapp.com';
  readonly api: string = '/api/v1/todo';
}