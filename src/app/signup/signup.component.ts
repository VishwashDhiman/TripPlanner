import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoginService } from '.././login.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  public logged = false;
  public path = "./assets/sig.jpg";
  public UserName = "";
  public Email = "";
  public Password = "";

  constructor(private http: HttpClient, private router: Router, private service: LoginService) { }

  public SubmitTourInformationForm(SignupForm: NgForm) {
    let httpHeaders = new HttpHeaders({ 'Contant-Type': 'application/json' });
    let data = {
      "email": this.Email,
      "password": this.Password
    };
    this.http.post('http://localhost:4000/api/signup', data, { observe: 'response' })
      .subscribe(response => {
        let status = response.status;
        let title = response.body;
        if (response.body != null) {
          swal("Succesfully Registered", "", "success");
          this.service.setData(title);
          this.router.navigate(['/home'], { fragment: 'top' });
        }
        else {
          swal("User Exists with this id", "", "warning");
        }
      }, error => {
        swal("Some Error", "", "error");
      })
  }
  public getLogg() {
    return this.logged;
  }

  ngOnInit() {
  }

}
