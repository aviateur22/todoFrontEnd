import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-rectangle-button',
  templateUrl: './rectangle-button.component.html',
  styleUrls: ['./rectangle-button.component.css']
})
export class RectangleButtonComponent {

  // Text du button
  @Input() buttonText: string = '';

  // Type d'input ()
  @Input() type: string = '';

  @Output() clickEmitter: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Action du click
   */
  click() {
    this.clickEmitter.emit();
  }
}
