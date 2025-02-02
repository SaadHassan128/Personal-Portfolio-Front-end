import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactMessages: { name: string, email: string, phone: string , message: string , request: string }[] = [];

  addContactMessage(contact: { name: string, email: string, phone: string , message: string , request: string}) {
    this.contactMessages.push(contact);
  }

  getContactMessages() {
    return this.contactMessages;
  }
}
