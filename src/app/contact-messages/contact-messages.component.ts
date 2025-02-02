import { Component, inject, OnInit } from '@angular/core';
import { ApicontactService, Contactme } from '../contact-me/apicontact.service';

@Component({
  selector: 'app-contact-messages',
  templateUrl: './contact-messages.component.html',
  styleUrl: './contact-messages.component.css',
})
export class ContactMessagesComponent implements OnInit {
  contactMessages: Contactme[] = [];
  contactMessage = inject(ApicontactService);
  deleteId: string | undefined = '';

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.contactMessage.getAllcontact().subscribe((data) => {
      this.contactMessages = data.data;
    });
  }

  confirmDelete(id: string | undefined) {
    if (id) {
      const confirmed = confirm("Are you sure you want to delete this contact?");
      if (confirmed) {
        this.deleteMessage(id);
      }
    }
  }

  deleteMessage(id: string | undefined) {
    if (id) {
      this.contactMessage.deletecontact(id).subscribe(() => {
        this.loadContacts();
      });
    }
  }

  saveDeleteid(id: string | undefined) {
    this.deleteId = id;
  }
}
