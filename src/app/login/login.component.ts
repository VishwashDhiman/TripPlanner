import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '.././login.service';
import { NavigationExtras, Router } from '@angular/router';
import { NavBarComponent } from './../nav-bar/nav-bar.component';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private ser: LoginService) {
  }
  path = '/assets/train2.jpg';
  public Email = "";
  public Password = "";
  public response;
  public logged = false;
  SubmitTourInformationForm(loginForm: NgForm) {

    let data =
      {
        "email": this.Email,
        "password": this.Password
      };
    this.http.post('http://localhost:4000/api/login', data, { observe: 'response' })
      .subscribe(response => {
        let status = response.status;
        let title = response.body;
        if (title != null) {
          swal("Succesfully Loggined", "", "success");
          this.ser.setData(title);
          this.router.navigate(['/home'], { fragment: 'top' });
        }
        else {
          swal("Enter Correct Email and Password", "", "warning");
        }
      }, error => {
        swal("Enter Correct Email and Password", "", "error");
      })
  }
  ngOnInit() {
  }
}