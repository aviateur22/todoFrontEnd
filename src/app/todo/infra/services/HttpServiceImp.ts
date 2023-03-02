import { HttpServiceException } from "../../exceptions/HttpServiceException";
import { HttpSourceSelection } from "../helpers/http/HttpSourceSelection";
import { HttpSchema } from "../ports/http/HttpSchema";

export class HttpServiceImp<T, D> {
 
  constructor(private httpSourceSelection: HttpSourceSelection<T,D>) {}
  static http: HttpSchema<any, any>;

  /**
   * Selection de la source Http
   * @param { number } httpSource 
   */
  setHttp(httpSource: number): void {
    HttpServiceImp.http = this.httpSourceSelection.setHttp(httpSource);
  }

  /**
   * Retourn la source des requetes
   * @returns {HttpSchema}
   */
  static getHttp(): HttpSchema<any, any> {
    if(typeof HttpServiceImp.http === 'undefined') {
      throw new HttpServiceException('no HTTP service selected');
    }
    return HttpServiceImp.http;
  }
}