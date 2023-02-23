import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  submitted=false;

  constructor(private formbuilder:FormBuilder,private userservice:UserService){}
  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  get f() { return this.loginForm.controls;}
  onSubmit(){
   this.submitted=true;
   if(this.loginForm.valid){
    let payload={
      email:this.loginForm.value.email,
      password:this.loginForm.value.password,
    }
    this.userservice.adminLogin(payload).subscribe((response:any)=>{
      console.log("Logged In Successful",response);
      localStorage.setItem('token',response.data)
      
    })
   }
  }

}
