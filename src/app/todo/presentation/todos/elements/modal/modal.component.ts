import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('1s ease-in', style({
    opacity: 1
  }))
]);

const exitTransition = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('1s ease-out', style({
    opacity: 0
  }))
]);

const fadeIn = trigger('fadeIn', [enterTransition]);
const fadeOut = trigger('fadeOut', [exitTransition]);


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  // Emitter pour fermer la modal
  @Output() hideModalEmitter: EventEmitter<any> = new EventEmitter<any>();

  // Emitter suppression Todo
  @Output() deleteTodoEmitter: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Ferme la modal de suppression
   */
  closeModal() {
    this.hideModalEmitter.emit();
  }

  /**
   * Suppression de la todo
   */
  DeleteSelectedTodo() {
    this.deleteTodoEmitter.emit();
  }

  

}
