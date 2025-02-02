import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { ApicontactService, Contactme } from './apicontact.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  contactForm: FormGroup;
  contact = inject(ApicontactService);

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10,15}$/)]],
      request: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Prefill form fields (optional)
    this.contactForm.patchValue({
      name: '',
      email: '',
      phone: '',
      request: ''
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const message: Contactme = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
        request: this.contactForm.value.request
      };
      
      this.contact.createcontact(message).subscribe();
      this.contactForm.reset();
    }
  }
}
