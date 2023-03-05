import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rounded-button',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.css']
})
export class RoundedButtonComponent {

  @Output() clickEmitter: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Clique bouton
   */
  click(event: Event) {
    event.stopPropagation();
    this.clickEmitter.emit();
  }

}
