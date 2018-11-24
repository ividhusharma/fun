import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class AppService {

  authenticated = false;
  user : Object;

  constructor(private http: Http) {
  }

  authenticateAndRedirect(credentials, callback) {

        const headers = new Headers(credentials ? {
            authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});
		
        this.http.get('patient/all', {headers: headers}).subscribe(response => {
            if (response) {
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
            return callback && callback();
        });

    }
	
	authenticate(credentials) {

        const headers = new Headers(credentials ? {
            authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

       return this.http.get('patient/all', {headers: headers});
	   /*.subscribe(response => {
            if (response) {
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
            this.user = response;
			return true;
        });
		*/
    }

}
