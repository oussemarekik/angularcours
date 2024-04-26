import { Injectable } from '@angular/core';
import { SESSIONITEMS,Session } from './sessions';
import { Observable } from 'rxjs';

@Injectable()
export class FakeSessionItemService {
constructor() { }

get() { return SESSIONITEMS; }
add(sessionItem:any) {
    SESSIONITEMS.push(sessionItem);
}
getSession(id: number){
  return SESSIONITEMS[id - 1];
  }
delete(sessionItem: any) {
    SESSIONITEMS.splice(SESSIONITEMS.indexOf(sessionItem), 1);
    // Supprime l'élément de SESSIONITEMS en utilisant indexOf pour trouver l'index de sessionItem
    // puis splice pour supprimer cet élément de la liste.
  }
}