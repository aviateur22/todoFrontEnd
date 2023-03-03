import { Component, EventEmitter, Input, Output } from '@angular/core';

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
