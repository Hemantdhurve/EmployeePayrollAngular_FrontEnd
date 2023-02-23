import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IdeleteEmployee } from 'src/app/typeInterface/typeInterface';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  token: any;

  constructor(private httpservice: HttpService) {
    this.token=localStorage.getItem('token')
   }

  getAllEmployees() {
    let headersOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.GetService('/Emoloyee/RetriveAllEmp',true,headersOptions);
  }

  deleteEmployee(reqdata:IdeleteEmployee) {
    let headersOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.DeleteService('/Emoloyee/DeleteEmployee?employeeId='+reqdata,true,headersOptions);
  }

}
