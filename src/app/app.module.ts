import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule } from './material/material.module';

import { Middleware } from './middleware';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';

import { HttpUtil } from './utils/http-request';
import { AuthService } from './auth.service';
import { DashboardService } from './dashboard/dashboard.service'

import { SearchfilterPipe } from './pipes/searchfilter.pipe';
import { UnitConversionPipe } from './pipes/unit-conversion.pipe';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate:[Middleware]},
  { path: 'dashboard', component: DashboardComponent, canActivate:[Middleware]},
  { path: 'logout', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'help', component: HelpComponent},
  { path: '*', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    HelpComponent,
    SearchfilterPipe,
    UnitConversionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    Middleware,
    AuthService,
    HttpUtil,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
