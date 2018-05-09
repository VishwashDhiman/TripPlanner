import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { DatepickerOptions } from 'ng2-datepicker';
import { IMyOptions, IMyDateModel } from 'mydatepicker';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';

const now = new Date();

@Component({
  selector: 'app-new-package',
  templateUrl: './new-package.component.html',
  inputs: ['child'],
  styleUrls: ['./new-package.component.css']
})

export class NewPackageComponent implements OnInit {

  public photo = "./assets/plane3.jpg";
  public selectedRow: Number;
  public setClickedRow: Function;
  public selected = false;
  public source = "";
  public destination = "";
  public dispReturn: Boolean = false;
  public dispArrival: Boolean = true;
  public adults = 1;
  public childrens = 0;
  public Arrivaldate;
  public Departdate;
  public databaseTable: any;
  public notLogin = true;
  public loggedIn = false;
  public str: string;
  public mytime: Date = new Date();
  public showData: boolean = false;
  public marked = new Array(12).fill(0);
  public arr = [];
  public flights = { "data": [] };

  categories: any[] = [
    { id: 'YYZ', name: 'Toronto' },
    { id: 'HND', name: 'Tokyo' },
    { id: 'WAS', name: 'Washington, D.C.' },
    { id: 'DXB', name: 'Dubai' },
    { id: "DEL", name: 'Delhi' },
    { id: 'FRA', name: 'Frankfurt' },
    { id: 'MRS', name: 'Marignane' },
    { id: 'LAX', name: 'Los Angeles International' },
    { id: 'ZBC', name: 'Birmingham' }
  ];

  currentYear: any = this.mytime.getUTCFullYear();
  currentDate: any = this.mytime.getUTCDate() - 1;
  currentMonth: any = this.mytime.getUTCMonth() + 1; //months from 1-12

  app_id = "c66591e4";
  api_key = "89d9830bfee0cb120f65ef19e5ed1fce";
  base_url = "https://developer.goibibo.com";

  constructor(private http: HttpClient, private spinnerService: Ng4LoadingSpinnerService,
    private service: LoginService, private router: Router) {
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    }
  }

  private myDatePickerOptions: IMyOptions = {
    disableUntil: { year: this.currentYear, month: this.currentMonth, day: this.currentDate },
    dateFormat: 'yyyy.mm.dd'
  };

  public getSourceValue(value) {
    console.log(value);
    this.source = value;
  }
  public getDestValue(value) {
    console.log(value);
    this.destination = value;
  }

  addReturn() {
    this.dispReturn = false;
    document.getElementById("round").style.backgroundColor = "rgb(34, 66, 124)";
    document.getElementById("selection").style.backgroundColor = "white";
  }

  returnDetails() {
    this.dispReturn = true;
    document.getElementById("round").style.backgroundColor = "white";
    document.getElementById("selection").style.backgroundColor = "rgb(34, 66, 124)";
  }

  call() {
    var api_search = this.base_url + '/api/search/?app_id=' + this.app_id + '&app_key=' + this.api_key;
    let url = api_search + '&source=' + this.source + '&destination=' + this.destination +
      '&dateofdeparture=' + this.str + '&adults=' + this.adults + '&children' + this.childrens + '&counter=100'
    this.http.get<any>(url).subscribe( //get just made the request not send it to server
      response => {
        console.log(response);
        this.databaseTable = response;
        for (let i = 0; i < 12; i++) {
          console.log(this.databaseTable.data.onwardflights[i].airline);
          this.arr[i] = this.databaseTable.data.onwardflights[i];
        }
        this.showData = true;
        this.spinnerService.hide();
      }, error => {
        alert("some error");
        this.spinnerService.hide();
      }
    );
  }

  public showflights() {
    this.spinnerService.show();
    if (this.source != this.destination) {
      this.str = this.Arrivaldate.formatted.replace(".", "");
      this.str = this.str.replace(".", "");
      this.call();
    }
    else {
      swal("Source and destination are same", "", "error");
      this.spinnerService.hide();
    }

    for (let i = 0; i < this.flights.data.length; i++) {
      console.log(this.flights.data[i]);
    }
  }
  public check(i) {
    let c = 0;
    if (this.marked[i] == 0)
      this.marked[i] = 1;
    else
      this.marked[i] = 0;
    for (let j = 0; j < 12; j++)
      if (this.marked[j] == 1)
        c = 1;
    if (c)
      this.selected = true;
    else
      this.selected = false;
  }

  public bookFlight() {
    let res: boolean;
    res = this.service.getLoggin();
    this.notLogin = !res;
    this.loggedIn = res;
    if (!this.notLogin) {
      for (let i = 0; i < 15; i++) {
        if (this.marked[i] == 1) {
          let httpHeaders = new HttpHeaders({ 'Contant-Type': 'application/json' });
          let id = this.service.getId();
          let data =
            {
              "id": id,
              "airline": this.arr[i].airline,
              "flight": this.source + "-" + this.destination,
              "fare": this.arr[i].fare.totalfare,
              "departureTime": this.arr[i].deptime,
              "duration": this.arr[i].duration
            };
          this.http.post('http://localhost:4000/api/tours', data, { observe: 'response' })
            .subscribe(response => {
              let status = response.status;
              console.log(response);
              let title = response.body;
              console.log(title);
              swal("Data Saved", "", "success");
              this.router.navigate(['/home'], { fragment: 'top' });
            }, error => {
              swal("Some Error", "", "error");
            });
        }
      }
    }
    else {
      swal("Not Logged", "", "warning");
      this.router.navigate(['/login'], { fragment: 'top' });
    }
  }
  ngOnInit() {
  }
}
