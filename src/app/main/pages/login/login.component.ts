import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this._formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required]],
  });


  constructor(private _formBuilder: FormBuilder) { }


  onSubmit = (): void => {
    console.log(JSON.stringify(this.loginForm.value))
  }

  fieldIsValid = (name: string): boolean => {
    const fieldName: any = this.loginForm.get(name);
    return (fieldName.invalid && fieldName.touched);
  }

  labelAnimation = (name: string): boolean => {
    const fieldName: any = this.loginForm.get(name);
    return (!fieldName.pristine && fieldName.value);
  }

}
