/**
 * Exception Http service
 */
export class HttpServiceException extends Error {
  constructor(message: string) {
    super(message);
  }
}