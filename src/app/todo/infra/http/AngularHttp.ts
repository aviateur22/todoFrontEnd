import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpSchema } from "../ports/http/HttpSchema";

export class AngularHttp<D, T> implements HttpSchema<D, T> {
  constructor(private http: HttpClient) {}

  patch(url: string, data: any): Observable<D | T> {
    throw new Error("Method not implemented.");
  }

  delete(url: string, data: any): Observable<D | T> {
    throw new Error("Method not implemented.");
  }

  get(url: string): Observable<D|T> {
    return this.http.get<D|T>(url);
  }
  
  post(url: string, data: any): Observable<D|T> {
   return this.http.post<D|T>(url, data)
  }


}