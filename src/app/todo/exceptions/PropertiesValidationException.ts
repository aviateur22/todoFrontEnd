/**
 * Exception sur les propriétés d'un objects
 */
export class PropertiesValidationException extends Error {
  constructor(message: string) {
    super(message);
  }
}