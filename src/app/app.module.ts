import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { Middleware } from './middleware';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';
import { HelpComponent } from './help/help.component';


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
    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    Middleware,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
