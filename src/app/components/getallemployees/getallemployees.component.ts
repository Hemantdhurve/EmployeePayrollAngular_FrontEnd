import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fade, slider } from 'src/app/animations/animation';
import { DataService } from 'src/app/services/dataservice/data.service';
import { EmployeeService } from 'src/app/services/employeeservices/employee.service';
import { IdeleteEmployee } from 'src/app/typeInterface/typeInterface';
import { DialogupdateemployeeComponent } from '../dialogupdateemployee/dialogupdateemployee.component';

@Component({
  selector: 'app-getallemployees',
  templateUrl: './getallemployees.component.html',
  styleUrls: ['./getallemployees.component.scss'],
  animations:[
    // trigger('fade',[

    //   transition('void=>*',[
    //     style({opacity:0,}),
    //     animate(2000,style({opacity:1,}))
    //   ]),

    //   transition('*=>void',[
    //     animate(2000,style({opacity:0}))
    //   ])
    // ])
    fade,
    slider
  ]
})
export class GetallemployeesComponent implements OnInit {

  empArray:Object=[];
  subscription:any;
  message:any;
  searchname:string='';
  searchToggle:boolean=true;

  constructor(private employeeservice:EmployeeService,public dialog: MatDialog,private dataservice:DataService,private snackbar:MatSnackBar){}

  ngOnInit(): void {
    this.getAllEmployee();

    this.subscription=this.dataservice.currentMessage.subscribe(message=>{
      this.message=message;
    //now storing the data in the variable
    this.searchname=message.dataResult[0];
    console.log(this.searchname);
    })
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
      this.snackbar.open("Employee Deleted From List ", "Close",{duration:2000});

      this.getAllEmployee();      
    })
  }
  openDialog(empObj:object) {
    const dialogRef = this.dialog.open(DialogupdateemployeeComponent,{
      data:empObj
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  searchName(event: any) {
    let searchResult = {
      type: 'search',
      dataResult: [event.target.value]
    }
    return this.dataservice.changeMessage(searchResult)
  }

  searchField(){
    if(this.searchToggle===true){
      this.searchToggle=!this.searchToggle
    }
    else{
      this.searchToggle=!this.searchToggle
    }
  }
}
