import { Observable } from "rxjs";

/**
 * Http Schema
 */
export interface HttpSchema <D, T> {
  // Post
  post(url: string, data: any): Observable<D|T>;

  // Patch
  patch(url: string, data: any): Observable<D|T>;

  // Get
  get(url: string): Observable<D|T>

  // Delete
  delete(url: string, data: any): Observable<D|T>
  
}