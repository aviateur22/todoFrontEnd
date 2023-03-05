import { RouterSchema } from "../ports/router/RouterSchema";
import { Router } from '@angular/router';

export class AngularRouter implements RouterSchema {

  constructor(private router: Router) { }

  /**
   * Modification URL
   * @param url 
   */
  navigate(url: string): void {
    this.router.navigate([url]);
  }
}