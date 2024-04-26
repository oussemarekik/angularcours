import { Component } from '@angular/core';

@Component({
  selector: 'app-session-item-list',
  standalone: true,
  imports: [],
  templateUrl: './session-item-list.component.html',
  styleUrl: './session-item-list.component.css'
})
export class SessionItemListComponent {
  sessionItems = [
    {
      id: 1,
      name: 'Web',
      track: 'MEAN Stack',
      date: new Date('2023-06-13'),
      duree: 3,
      local: 'Lyon',
      participants: 0
    },
    {
      id: 2,
      name: 'Mobile',
      track: 'Angular et Ionic',
      date: new Date('2023-08-10'),
      duree: 5,
      local: 'Paris',
      participants: 0
    },
    {
      id: 3,
      name: 'Web',track: 'NodeJS',
      date: new Date('2023-07-20'),
      duree: 5,
      local: 'Lyon',
      participants: 0
    } ];
}
