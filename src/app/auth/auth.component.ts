import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {

  isLogin = false;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm)
  {

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    if(this.isLogin){
        this.authService.login(email,password).subscribe(
           resData =>{
          console.log(resData);
          this.isLoading = false;
          this.router.navigate(['/recipes']);
          
        },
        errorMessage =>{
          console.log(errorMessage);
          this.error = errorMessage;
          
          this.isLoading = false;
          
        });
    }else{
      this.authService.signup(email,password).subscribe(
        resData =>{
          console.log(resData);
          this.isLoading = false;
          this.router.navigate(['/recipes']);
          
        },
        errorMessage =>{
          console.log(errorMessage);
          this.error = errorMessage;
          
          this.isLoading = false;
          
        }
      );
    }
    
    form.reset(); 
    
  }


}
