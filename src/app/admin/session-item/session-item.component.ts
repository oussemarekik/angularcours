import { Component, Input, Output,EventEmitter } from '@angular/core';
import {CommonModule} from "@angular/common";
import {InscriptionDisabledDirective} from "./InscriptionDisabledDirective";
import { InscriptionDDDirective } from '../../inscription-dd.directive';
import { FakeSessionItemService } from '../session-item-list/FakeSessionItemService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-session-item',
  standalone: true,
  imports: [CommonModule,InscriptionDDDirective,RouterLink],
  templateUrl: './session-item.component.html',
  styleUrl: './session-item.component.css'
})
export class SessionItemComponent {
  isCompleted:boolean=false;
  constructor(private fakeSessionItemService: FakeSessionItemService) {
    // Injection du service dans le constructeur
  }
  name: string='oussema';
  Couleur:string="Red";
  @Input()
  session:any

  @Output()
  onSelect: EventEmitter<any> = new EventEmitter();

  ajouter(session:any){
    if(session.participants==19){
      this.isCompleted=!this.isCompleted
      console.log(this.isCompleted)
    }
    this.onSelect.emit(session)
  }
  onDelete(){
    this.fakeSessionItemService.delete(this.session);
  }
}
