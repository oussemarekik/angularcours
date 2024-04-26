import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule,  
 } from '@angular/forms';
import { FakeSessionItemService } from '../session-item-list/FakeSessionItemService';
import { log } from 'console';

@Component({
  selector: 'app-session-add-form',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule ],
  templateUrl: './session-add-form.component.html',
  styleUrl: './session-add-form.component.css'
})
export class SessionAddFormComponent {
  constructor(private fakeSessionItemService: FakeSessionItemService) {
 // Exemple d'utilisation du service
  }
  sessionForm = new FormGroup({
    name: new FormControl('', Validators.required),
    track: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    duree: new FormControl('', [Validators.required, Validators.min(1)]), // Ensure minimum duration of 1 hour
    local: new FormControl('', Validators.required),
    participants: new FormControl(18, Validators.required) // Disable participant number modification
  });

  onSubmit() {
    if (this.sessionForm.valid) {
      // Here, you would typically process the form data (e.g., send it to a server)
      console.log('Form submitted:', this.sessionForm.value);
     
      this.fakeSessionItemService.add(this.sessionForm.value)
      this.sessionForm.reset(); 
      console.log(this.fakeSessionItemService.get())// Reset the form after successful submission
    }
  }
}
