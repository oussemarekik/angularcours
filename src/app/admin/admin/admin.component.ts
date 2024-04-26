import { Component } from '@angular/core';
import { SessionAddFormComponent } from '../session-add-form/session-add-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SessionEditFormComponent } from '../session-edit-form/session-edit-form.component';
import { SessionItemListComponent } from '../session-item-list/session-item-list.component';
import { FakeSessionItemService } from '../session-item-list/FakeSessionItemService';
import { RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SessionAddFormComponent,FormsModule,CommonModule,SessionEditFormComponent,SessionItemListComponent,RouterOutlet,RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  providers:[FakeSessionItemService]
})
export class AdminComponent {

}
