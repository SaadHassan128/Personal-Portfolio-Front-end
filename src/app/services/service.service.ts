import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  services: Service[] =[]

  getServices() {
    return this.services;
  }
  updateService(index: number, service: Service) {
    this.services[index] = service;
  }
}

export interface Service {
  _id?: string;
  title: string;
  img: string;
  desc: string;
}
