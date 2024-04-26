import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-session-item',
  standalone: true,
  imports: [],
  templateUrl: './session-item.component.html',
  styleUrl: './session-item.component.css'
})
export class SessionItemComponent {

  name: string='oussema';
  Couleur:string="Red";
  @Input()
  session:any

  @Output()
  onSelect: EventEmitter<any> = new EventEmitter();

  ajouter(session:any){
    this.onSelect.emit(session)
  }
}
