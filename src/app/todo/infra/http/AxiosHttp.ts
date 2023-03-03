import { Observable } from "rxjs";
import { HttpSchema } from "../ports/http/HttpSchema";

export class AxiosHttp<T, D> implements HttpSchema<T, D> {

  patch(url: string, data: any): Observable<T | D> {
    throw new Error("Method not implemented.");
  }

  delete(url: string): Observable<T | D> {
    throw new Error("Method not implemented.");
  }

  post(url: string, data: any): Observable<D> {
    throw new Error("Method not implemented.");
  }
  
  get(): Observable<D> {
    throw new Error("Method not implemented.");
  }

}