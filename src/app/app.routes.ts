import { Routes } from '@angular/router';
import { SessionItemListComponent } from './admin/session-item-list/session-item-list.component';
import { SessionAddFormComponent } from './admin/session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './admin/session-edit-form/session-edit-form.component';

export const routes: Routes = [
    {
        path: 'list',
        component: SessionItemListComponent},
        { path: 'admin', children: [
            { path: 'add', component: SessionAddFormComponent },
            { path: 'edit/:id', component: SessionEditFormComponent },
            { path: 'list', component: SessionItemListComponent },
            { path: '', redirectTo: 'list', pathMatch: 'full' },
          ]},
        
        { path: '', redirectTo: '/list', pathMatch: 'full' },
];
