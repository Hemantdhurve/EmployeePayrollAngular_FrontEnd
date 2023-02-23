import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  registrationForm!:FormGroup;
  submitted=false;
  
  constructor(private formbuilder:FormBuilder,private userservice:UserService,private router:Router){}

  ngOnInit(): void {
    this.registrationForm=this.formbuilder.group({
      fullName:['',[Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      mobileNumber:['',[Validators.required,Validators.minLength(10)]],
    })
  }
  get f() { return this.registrationForm.controls;}

  onSubmit(){
    this.submitted=true;

    if(this.registrationForm.valid){
      let payload={
        fullName:this.registrationForm.value.fullName,
        email:this.registrationForm.value.email,
        password:this.registrationForm.value.password,
        mobileNumber:Number(this.registrationForm.value.mobileNumber)
      }
      this.userservice.registration(payload).subscribe((response:any)=>{
        console.log("Registration Sucessful",response);
      })
      this.router.navigate(['login'])
    }
  }
}
