import { BackendApiSource } from "src/app/todo/infra/helpers/backend/BackendSource";
import { EnvironmentSchema } from "./port/EnviromnentSchema";

/**
 * Dev - mockBacjeServer Local
 */
export class EnvironmentDevMockServer implements EnvironmentSchema {
  readonly production: boolean = true;
  readonly name: string = 'dev';
  readonly domain: string = '';
  readonly api: string = '';
}