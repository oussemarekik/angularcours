import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FakeSessionItemService } from '../session-item-list/FakeSessionItemService';
import { Session } from '../session-item-list/sessions'; // Assuming Session interface
import { CommonModule } from '@angular/common';

@Component({
  imports: [ReactiveFormsModule, CommonModule], // Removed FormsModule (not needed for reactive forms)
  selector: 'app-session-edit-form',
  standalone: true,
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {

  session: Session | undefined;
  id: number;
  editForm: FormGroup;

  tracks = ['MEAN', 'Angular', 'NodeJS', 'Android', 'Swift', 'Xamarin'];

  constructor(
    private sessionItemService: FakeSessionItemService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.editForm = new FormGroup({
      id: new FormControl({ value: "", disabled: true }),
      name: new FormControl('', Validators.required),
      track: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      duree: new FormControl('', [Validators.required, Validators.min(1)]),
      location: new FormControl('', Validators.required),
      participants: new FormControl({ value: '', disabled: true })
    });
  }

  ngOnInit() {
    this.session = this.sessionItemService.getSession(this.id);
    console.log(this.session);
    this.initializeForm(); // Call initializeForm after retrieving data
  }

  initializeForm() {
    if (this.session) {
      this.editForm.patchValue({
        id: this.session.id,
        name: this.session.name,
        track: this.session.track,
        date: this.session.date,
        duree: this.session.duree,
        location: this.session.local, // Assuming 'local' is a typo
        participants: this.session.participants
      });
    }
  }

  onSubmit() {
    if (this.editForm.valid) {
      console.log(this.editForm.value);
      // Implement logic to send edited data to a service here
    }
  }
}
