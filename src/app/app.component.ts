import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionItemComponent } from './admin/session-item/session-item.component';
import { SessionItemListComponent } from './admin/session-item-list/session-item-list.component';
import { RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SessionItemComponent, SessionItemListComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  firstSession = {
    id: 1,
    name: 'Formation Web',
    track: 'MEAN Stack',
    date: new Date('2018-06-13'),
    duree: 3,
    local: 'Lyon',
    participants:0
    };
    inscrire(session:any){
      console.log("nouvelle inscription")
      session.participants++
      console.log(session.participants," Particicpants")

    }
}
