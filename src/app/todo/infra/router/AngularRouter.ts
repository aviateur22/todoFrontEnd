import { RouterSchema } from "../ports/router/RouterSchema";
import { ActivatedRoute, Router } from '@angular/router';

export class AngularRouter implements RouterSchema {

  constructor(private router: Router, private route: ActivatedRoute) { }

  /**
   * Modification URL
   * @param url 
   */
  navigate(url: string): void {
    this.router.navigate([url]);
  }
}