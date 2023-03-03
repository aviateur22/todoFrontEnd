import { AngularHttp } from "../../http/AngularHttp";
import { AxiosHttp } from "../../http/AxiosHttp";
import { HttpSchema } from "../../ports/http/HttpSchema";
import { HttpSource } from "./HttpSource";

export class HttpSourceSelection<T,D> {

  constructor(private angularHttp: AngularHttp<T, D>, private axiosHttp: AxiosHttp<T, D>) {}
  
  /**
   * Selection de la source Http
   * @param { number } httpSource 
   */
  setHttp(httpSource: number): HttpSchema<any, any> {
    switch(httpSource) {
      case HttpSource.angularHttp: return this.angularHttp; break;
      case HttpSource.axiosHttp: return this.axiosHttp; break;
      default: throw new Error('invalid http selection'); break;
    }
  }
}