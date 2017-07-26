import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Support Panel';

  constructor(private auth_service:AuthService, private _router:Router) {}

  isLoggedIn = false; 

  ngOnInit()
  {
    this._router.events.subscribe((val) => {
      if(this.auth_service.getToken()) {
        this.isLoggedIn = true;
      }else {
        this.isLoggedIn = false;
      }
    })
  }
}
