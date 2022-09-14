import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  cnfpassword:string = 'none';
  constructor(){}

ngOnInit(): void {
  }

  registerForm= new FormGroup({
    fname: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    lname: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl('',[Validators.required,Validators.email]),
    mobile: new FormControl('',[Validators.required,Validators.pattern("[0-9].*"),Validators.minLength(10),Validators.maxLength(12)]),
    gender: new FormControl('',[Validators.required]),
    location: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    pswd: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(11)]),
    confirmp: new FormControl(''),
  });

  submit(){
    if(this.PSWD.value == this.Confirmp.value){
      console.log(this.registerForm.valid)
      this.cnfpassword='none'
    }
    else{
      this.cnfpassword='inline'
    }
  }
  get FName():FormControl{
    return this.registerForm.get("fname") as FormControl;
  }
  get LName():FormControl{
    return this.registerForm.get("lname") as FormControl;
  }
  get Email():FormControl{
    return this.registerForm.get("email") as FormControl;
  }
  get Mobile():FormControl{
    return this.registerForm.get("mobile") as FormControl;
  }
  get Gender():FormControl{
    return this.registerForm.get("gender") as FormControl;
  }
  get Location():FormControl{
    return this.registerForm.get("location") as FormControl;
  }
  get PSWD():FormControl{
    return this.registerForm.get("pswd") as FormControl;
  }
  get Confirmp():FormControl{
    return this.registerForm.get("confirmp") as FormControl;
  }

}
