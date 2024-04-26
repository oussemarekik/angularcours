import {Component, OnInit} from '@angular/core';
import {SessionItemComponent} from "../session-item/session-item.component";
import {CommonModule} from "@angular/common";
import { FakeSessionItemService } from './FakeSessionItemService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-session-item-list',
  standalone: true,
  imports: [SessionItemComponent,CommonModule,RouterLink],
  templateUrl: './session-item-list.component.html',
  styleUrl: './session-item-list.component.css'
})
export class SessionItemListComponent implements OnInit{
  sessionItems :any

  constructor(private fakeSessionItemService: FakeSessionItemService) {
    // Injection du service dans le constructeur
    this.sessionItems = this.fakeSessionItemService.get(); // Exemple d'utilisation du service
  }
  
  totInscrir:number=0

  inscrire(session:any){

    console.log("nouvelle inscription")
    session.participants++
    console.log(session.participants," Particicpants")
    this.totInscrir=0
    for (let i = 0; i < this.sessionItems.length; i++) {
      this.totInscrir += this.sessionItems[i].participants;
    }
  }

  ngOnInit(): void {
    for (let i = 0; i < this.sessionItems.length; i++) {
      this.totInscrir += this.sessionItems[i].participants;
    }
  }
}
