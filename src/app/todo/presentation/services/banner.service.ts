import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  // Texte initial
  private initialBannerText: string = 'ma super todo'

  // Affichage message initial
  private messageSource = new BehaviorSubject(this.initialBannerText);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  /**
   * Modification du text
   * @param {string} message 
   */
  changeBannerText(message: string):void {
    this.messageSource.next(message);
  }

  /**
   * Affichage Text initiale
   */
  setInitialBannerText() {
    this.messageSource.next(this.initialBannerText);
  }
}
