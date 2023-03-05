import { BackendApiSource } from "src/app/todo/infra/helpers/backend/BackendSource";
import { EnvironmentSchema } from "./port/EnviromnentSchema";

/**
 * Dev - LocalServer
 */
export class EnvironmentDevLocalServer implements EnvironmentSchema {
  readonly production: boolean = false;
  readonly source: number = BackendApiSource.mockBackendApi;
  readonly name: string = 'dev';
  readonly domain: string = 'http://localhost:4000';
  readonly api: string = '/api/v1/todo';
}