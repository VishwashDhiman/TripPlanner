import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public photo = "./assets/lamp.jpg";
  public selectedRow: Number;
  public setClickedRow: Function;
  public train = false;
  public flight = false;
  public selectedField;
  public data;
  public id;

  constructor(private spinnerService: Ng4LoadingSpinnerService, private http: HttpClient,
    private service: LoginService, private router: Router) {
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    }
  }

  public showData() {
    this.id = this.service.getId();
    if (this.id) {
      if (this.selectedField == 'Flights') {
        this.http.get('http://localhost:4000/api/tours?id=' + this.id).subscribe( //get just made the request not send it to server
          response => {
            this.data = response;
            this.flight = true;
            this.train = false;
          }, error => {
            swal("some error","","error");
          }
        );
      }
      else if (this.selectedField == 'Trains') {
        this.http.get('http://localhost:4000/api/train?id=' + this.id).subscribe( //get just made the request not send it to server
          response => {
            this.data = response;
            console.log(this.data);
            this.train = true;
            this.flight = false;
          }, error => {
            alert("some error");
          }
        );
      }
    }
    else {
      swal("Loggin First", "", "warning");
      this.router.navigate(['/login'], { fragment: 'top' });
    }
  }

  ngOnInit() {
  }
}
