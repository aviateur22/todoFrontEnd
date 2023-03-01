/**
 * Exception en rapport avec le repository
 */
export class BackendApiException extends Error {
  constructor(message: string) {
    super(message);
  }
}