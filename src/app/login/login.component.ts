import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
   model: any = {};
   returnUrl: string = '/dashboard';

  constructor(
    private auth_service:AuthService,
    private _route : ActivatedRoute,
    private _router : Router
  ) {}

  ngOnInit() 
  {
    this.logout();
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  login()
  {
    console.log(this.model)
    this.auth_service.login();
    this._router.navigate([this.returnUrl]);
  }

  logout()
  {
    this.auth_service.logout();
    this._router.navigate([this.returnUrl]);
  }
}
