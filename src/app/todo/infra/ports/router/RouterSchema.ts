import { Observable } from "rxjs";

/**
 * Router Schema
 */
export interface RouterSchema {

  /**
   * Modification URL
   * @param {string} url
   */
  navigate(url: string): void;
} 