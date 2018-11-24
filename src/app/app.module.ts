import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppService } from './service/app-service.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { AppComponent } from './app.component';
import { XhrInterceptor } from './interceptor.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { APP_BASE_HREF } from '@angular/common';
import { ReadPatientComponent } from './read-patient/read-patient.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'create', component: CreatePatientComponent},
  { path: 'read', component: ReadPatientComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreatePatientComponent,
    ReadPatientComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
	HttpModule,
    FormsModule,
	ReactiveFormsModule
  ],
  providers: [AppService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }, {provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);