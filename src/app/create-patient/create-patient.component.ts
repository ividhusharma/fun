import { Component, OnInit } from '@angular/core';
import { AppService } from '.././service/app-service.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent{

   //patientDto = {patientfirstname: '', patientlastname: '', patientmobilenumber: '', patientaddress:'', patientemail:''};
   //isSaved = false;
   //user = {};

  constructor(private app: AppService, private http: Http, private router: Router) {
	  //this.user = this.app.user;	  
  } 
  
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  mobileNumber: FormControl;
  address: FormControl;


  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.mobileNumber = new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]);
    this.address = new FormControl('');
  }

  createForm() {
    this.myform = new FormGroup({      
        firstName: this.firstName,
        lastName: this.lastName,      
		email: this.email,
		mobileNumber: this.mobileNumber,
		address: this.address
    });
  }

  onSubmit() {
    if (this.myform.valid) {
		this.createPatient();
		console.log("Form Submitted!");
		this.myform.reset();
    }
  }
  
  createPatient() {
	//const headers = this.patientDto;	  
    this.http.post('patient/create', this.myform.value).
		subscribe(response => console.log(response.json()));
    return false;
  }  
  
  authenticated() { 
	return this.app.authenticated; 
  } 

}
