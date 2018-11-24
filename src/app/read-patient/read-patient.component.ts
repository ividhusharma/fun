import { Component, OnInit } from '@angular/core';
import { AppService } from '.././service/app-service.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {URLSearchParams} from '@angular/http';

@Component({
  selector: 'app-read-patient',
  templateUrl: './read-patient.component.html',
  styleUrls: ['./read-patient.component.css']
})
export class ReadPatientComponent implements OnInit {

  patients : Object[];

  constructor(private app: AppService, private http: Http) { 
	this.http.get('patient/all')
	.subscribe(res => {
		this.patients = res;
		console.log(res.json());
	});
  }

  ngOnInit() {
	 // this.http.get('patient/all').subscribe(res => this.patients = res.value());
  }

}
