import { Component } from '@angular/core';
import { AppService } from './service/app-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private app: AppService, private http: HttpClient, private router: Router) {
      //this.app.authenticateAndRedirect(undefined, undefined);
    }
    logout() {
      this.http.post('', {}).pipe( finalize(() => {
          this.app.authenticated = false;
          this.router.navigateByUrl('/login');
      })).subscribe();
    }
	
	authenticated() { 
	  return this.app.authenticated; 
	} 

}