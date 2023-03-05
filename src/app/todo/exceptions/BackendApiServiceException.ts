/**
 * Exception en rapport avec le repository
 */
export class BackendApiServiceException extends Error {
  constructor(message: string) {
    super(message);
  }
}