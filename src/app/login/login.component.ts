import { Component, OnInit } from '@angular/core';
import { AppService } from '.././service/app-service.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  
  credentials = {username: '', password: ''};
  subscription : Object = null;
  patientData : Object[];

  constructor(private app: AppService, private http: Http, private router: Router) {
	  //if(this.app.authenticated)
		  //http.get('hello/user').subscribe(data => this.user = data);	  
  }

 login() {
    this.app.authenticateAndRedirect(this.credentials, () => {
        this.router.navigateByUrl('/home');
    });
    return true;
  }
  
 /* login() {
	  this.subscription = this.app.authenticate(this.credentials).subscribe( v => this.patientData = v.json());
	  if(this.patientData)
			this.app.authenticated = true;
    return true;
  }
  */
  
  authenticated() { 
  return this.app.authenticated; 
  } 
  

}