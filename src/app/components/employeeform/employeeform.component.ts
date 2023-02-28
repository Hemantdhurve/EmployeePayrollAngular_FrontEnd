import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employeeservices/employee.service';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.scss'],
})
export class EmployeeformComponent implements OnInit{

  empForm!:FormGroup;
  submitted=false;
  deptArray:any=[];
  checked:boolean=true; 
  deptname:string='';
  id:Number=0;
  selected:any;

  constructor(private formbuilder:FormBuilder,private empservice:EmployeeService,private router:Router,private snackbar:MatSnackBar){}

  ngOnInit(): void {
    this.empForm=this.formbuilder.group({
      employeeName:['',[Validators.required,Validators.minLength(8)]],
      profileImg:['',[Validators.required]],
      gender:['',[Validators.required]],
      department:['', Validators.required],
      salary:['',[Validators.required]],
      startDate:['',[Validators.required]],
      notes:['',[Validators.required]],
    })    
  }
  get f(){return this.empForm.controls}

  onSubmit(){
    this.submitted=true;
      let payload={
        employeeName:this.empForm.value.employeeName,
        profileImg:this.empForm.value.profileImg,
        gender:this.empForm.value.gender,
        department:this.empForm.value.department,
        salary:Number(this.empForm.value.salary),
        startDate:this.empForm.value.startDate,
        notes:this.empForm.value.notes,
      }
      this.empservice.addEmployee(payload).subscribe((response:any)=>{
        console.log('Employee Added Successfully',response);                
        this.router.navigate(['/getallemployee'])
      this.snackbar.open("Employee Added ", "Close",{duration:2000});

      })   
  }
 
}
