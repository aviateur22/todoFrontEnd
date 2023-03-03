/**
 * Exception router
 */
export class RouterServiceException extends Error {
  constructor(message: string) {
    super(message);
  }
}