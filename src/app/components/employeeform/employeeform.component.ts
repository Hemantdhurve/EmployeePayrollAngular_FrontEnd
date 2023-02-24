import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employeeservices/employee.service';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.scss']
})
export class EmployeeformComponent implements OnInit{

  empForm!:FormGroup;
  submitted=false;
  deptArray:any=[];
  checked:boolean=true; 
  deptname:string='';
  id:Number=0;

  constructor(private formbuilder:FormBuilder,private empservice:EmployeeService,){}

  ngOnInit(): void {
    this.empForm=this.formbuilder.group({
      employeeName:['',[Validators.required,Validators.minLength(8)]],
      profileImage:['',[Validators.required]],
      gender:['',[Validators.required]],
      department: this.formbuilder.array([],[Validators.required]),
      salary:['',[Validators.required]],
      startDate:['',[Validators.required]],
      notes:['',[Validators.required]],
    })    
    this.getDeptList();
  }
  get f(){return this.empForm.controls}

  onSubmit(){
    this.submitted=true;
    // if(this.empForm.valid){
      let payload={
        employeeName:this.empForm.value.employeeName,
        profileImage:this.empForm.value.profileImage,
        gender:this.empForm.value.gender,
        department:this.empForm.value.department,
        salary:this.empForm.value.salary,
        startDate:this.empForm.value.startDate,
        notes:this.empForm.value.notes,
      }
      this.empservice.addEmployee(payload).subscribe((response:any)=>{
        console.log('Employee Added Successfully',response);
                
      })  
    
  }

  getDeptList(){
    this.deptArray=[
      {id:1,deptname:'HR',checked:false},
      {id:2,deptname:'Sales',checked:false},
      {id:3,deptname:'Finance',checked:false},
      {id:4,deptname:'Engineer',checked:false},
      {id:5,deptname:'Other',checked:false},
    ]
}
  onChange($event:any){
   const id=$event.target.value;
   const isChecked=$event.target.checked;
   const deptname=$event.target.name;
   console.log('Id='+id,'checked value='+ isChecked,'deptName='+ deptname)

   const department: FormArray = this.empForm.get('department') as FormArray;

    if (isChecked) {
      department.push(new FormControl(id));
    } else {
      const index = department.controls.findIndex(x => x.value === id);
      department.removeAt(index);
    }
  }


  
}
