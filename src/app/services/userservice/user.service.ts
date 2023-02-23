import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilogin, Iregistration } from 'src/app/typeInterface/typeInterface';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any;

  constructor(private httpservice:HttpService) {
    this.token= localStorage.getItem('token')
  }

  adminLogin(reqdata:Ilogin){
    let headersOptions={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        // 'Authorization':'token'
      })
    }
    return this.httpservice.PostService('/Admin/Login',reqdata,false,headersOptions)
  }

  registration(reqdata:Iregistration)
  {
    let headersOptions={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        // 'Authorization':'token'
      })
    }
    return this.httpservice.PostService('/Admin/Registration',reqdata,false,headersOptions)
  }
}
