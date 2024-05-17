import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service'; 
import { Router } from '@angular/router';  

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authButtonText: string = 'Login';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.authStatus.subscribe(status => {
      this.authButtonText = status ? 'Logout' : 'Login';
    });
  }

  onAuthAction() {
    if (this.authButtonText === 'Logout') {
      this.onLogout();
    } else {
      this.router.navigateByUrl('/login');  
    }
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
