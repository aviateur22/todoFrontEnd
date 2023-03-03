import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpSchema } from "../ports/http/HttpSchema";

export class AngularHttp<D, T> implements HttpSchema<D, T> {
  constructor(private http: HttpClient) {}

  /**
   * PATCH
   * @param {string} url 
   * @param {any} data 
   * @returns {Observable<D | T>}
   */
  patch(url: string, data: any): Observable<D | T> {
    return this.http.patch<D|T>(url, data);
  }

  /**
   * Delete
   * @param {string} url 
   * @param {any} data 
   */
  delete(url: string): Observable<D | T> {   
    return this.http.delete<D|T>(url);
  }

  /**
   * GET
   * @param {string} url 
   * @returns {Observable<D|T>}
   */
  get(url: string): Observable<D|T> {
    return this.http.get<D|T>(url);
  }
  
  /**
   * POST
   * @param {string} url 
   * @param {any} data 
   * @returns {Observable<D|T>} 
   */
  post(url: string, data: any): Observable<D|T> {
   return this.http.post<D|T>(url, data)
  }
}