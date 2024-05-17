import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  isSignDivVisiable: boolean  = true;

  registerObj: RegisterModel  = new RegisterModel();
  loginObj: LoginModel  = new LoginModel();

  constructor(private authService: AuthService, private router: Router) { }

  onRegister() {
    debugger;
    const localUser = localStorage.getItem('f1siteusers');
    if(localUser != null) {
      const users =  JSON.parse(localUser);
      users.push(this.registerObj);
      localStorage.setItem('f1siteusers', JSON.stringify(users))
    } else {
      const users = [];
      users.push(this.registerObj);
      localStorage.setItem('f1siteusers', JSON.stringify(users))
    }
    alert('Registration complete!');
    this.router.navigateByUrl('/login');
  }


onLogin() {
  debugger;
  const localUsers = localStorage.getItem('f1siteusers');
  if (localUsers != null) {
    const users = JSON.parse(localUsers);

    const isUserPresent = users.find((user: RegisterModel) => user.email == this.loginObj.email && user.password == this.loginObj.password);
    if (isUserPresent != undefined) {
      alert("Successfully logged in!");
      localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
      this.authService.login();
      this.router.navigateByUrl('/home');
    } else {
      alert("No User Found");
    }
  }
}


}

export class RegisterModel  {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.name = "";
    this.password= ""
  }
}

export class LoginModel  { 
  email: string;
  password: string;

  constructor() {
    this.email = ""; 
    this.password= ""
  }
}