import { Component, inject, OnInit } from '@angular/core';
import { ApiservicesService } from './apiservices.service';
import { Service } from '../services/service.service';

@Component({
  selector: 'app-db-services',
  templateUrl: './db-services.component.html',
  styleUrl: './db-services.component.css'
})
export class DbServicesComponent implements OnInit {

  service = inject(ApiservicesService);
  services: Service [] = [];
  fetch = inject(ApiservicesService);
  deleteId : string | undefined = '';
  editMood = false;
  updateService() {
    this.editMood = !this.editMood;
  }
  ngOnInit() {
    this.fetch.getAllservices().subscribe((res) => {
      this.services = res.data;
    });
  }
  deleteService(id: string|undefined) {
    if(id){
      this.fetch.deleteService(id).subscribe((res) => {
        this.fetch.getAllservices().subscribe((res) => {
          this.services = res.data;
        });
      });
    }
  }
  togleId (id: string|undefined) {
    this.deleteId = id;
  }
}
