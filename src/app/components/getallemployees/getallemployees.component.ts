import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employeeservices/employee.service';
import { IdeleteEmployee } from 'src/app/typeInterface/typeInterface';

@Component({
  selector: 'app-getallemployees',
  templateUrl: './getallemployees.component.html',
  styleUrls: ['./getallemployees.component.scss']
})
export class GetallemployeesComponent implements OnInit {

  empArray:any;

  constructor(private employeeservice:EmployeeService){}
  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee(){
    this.employeeservice.getAllEmployees().subscribe((response:any)=>{
      console.log("Getting All Employee List",response)
      this.empArray=response.data;
    })
  }

  deleteEmployee(idData:IdeleteEmployee){
    this.employeeservice.deleteEmployee(idData).subscribe((response:any)=>{
      console.log("Employee Deleted Successfully",response);
      this.getAllEmployee();      
    })
  }

}
