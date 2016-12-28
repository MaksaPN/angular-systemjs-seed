import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions, XHRBackend } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';

import { AppComponent } from './components/app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { BaseService } from './services/base.service';
import { UserService } from './services/user.service';
import { HttpService } from './services/http.service';
import { AuthService } from './services/auth.service';

import './rxjs-extensions';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent
    ],
    providers: [
        UserService,
        AuthService,
        {
            provide: Http,
            useFactory: (backend: XHRBackend, options: RequestOptions, router: Router) => {
                return new HttpService(backend, options, router);
            },
            deps: [XHRBackend, RequestOptions, Router]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
