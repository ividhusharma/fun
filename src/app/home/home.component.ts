import { Component, OnInit } from '@angular/core';
import { AppService } from '.././service/app-service.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {URLSearchParams} from '@angular/http';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {

  title = 'Demo';
  user : string;
  

  constructor(private app: AppService, private http: Http) {  
  }

  authenticated() { 
	if(this.app.authenticated)
		this.doGet();
	return this.app.authenticated; 
  }
  
  doGet(){
	/*let search = new URLSearchParams();
	search.set('name', 'vidhu');
	search.set('limit', '25');
	this.http.get('patient/user', {search}).subscribe(res => this.user = res.text());
	*/
	this.http.get('patient/user').subscribe(res => this.user = res.text());
  }

}