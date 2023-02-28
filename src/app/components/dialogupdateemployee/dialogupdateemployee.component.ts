import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fade } from 'src/app/animations/animation';
import { EmployeeService } from 'src/app/services/employeeservices/employee.service';

@Component({
  selector: 'app-dialogupdateemployee',
  templateUrl: './dialogupdateemployee.component.html',
  styleUrls: ['./dialogupdateemployee.component.scss'],
  animations:[
    fade
  ]
})
export class DialogupdateemployeeComponent  implements OnInit{

  employeeId:Number=0;
  employeeName:string='';
  gender:string='';
  department:string='';
  salary:any;
  profileImg:string='';
  startDate:string='';
  notes:string='';
  dialogForm!:FormGroup;
  submitted=false;


  constructor(private dialogRef:MatDialogRef<DialogupdateemployeeComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private formbuilder:FormBuilder,private empservice:EmployeeService,private snackbar:MatSnackBar){
    console.log('dialod data printed', data);

    this.employeeId=data?.employeeId,
    this.employeeName=data?.employeeName,
    this.profileImg=data?.profileImg,
    this.gender=data?.gender,
    this.department=data?.department,
    this.salary=data?.salary,
    this.startDate=data?.startDate,
    this.notes=data?.notes

    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.dialogForm=this.formbuilder.group({
      employeeName:[''],
      profileImg:[''],
      gender:[''],
      department:[''],
      salary:[''],
      startDate:[''],
      notes:['']
    });
    this.updatePatchvalue();
    
  }

  updateEmployee(){
    this.submitted=true;
    let payload={
      employeeId:this.dialogForm.value.employeeId,
      employeeName:this.dialogForm.value.employeeName,
      profileImg:this.dialogForm.value.profileImg,
      gender:this.dialogForm.value.gender,
      department:this.dialogForm.value.department,
      salary:Number(this.dialogForm.value.salary),
      startDate:this.dialogForm.value.startDate,
      notes:this.dialogForm.value.notes,
    }
    this.empservice.updateEmployee(this.employeeId,payload).subscribe((response:any)=>{
      console.log("Employee Details Updated ",response);
      this.snackbar.open("Employee Details Updated", "Close",{duration:2000});
    })
  }

  updatePatchvalue(){
    this.dialogForm.patchValue({
      employeeName:this.data?.employeeName,
      profileImg:this.data?.profileImg,
      gender:this.data?.gender,
      department:this.data?.department,
      salary:this.data?.salary,
      startDate:this.data?.startDate,
      notes:this.data?.notes
    })
  }

}
