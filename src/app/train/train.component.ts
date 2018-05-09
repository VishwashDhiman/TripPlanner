import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgControl } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { IMyOptions, IMyDateModel } from 'mydatepicker';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {



  public photo = "./assets/train4.jpg";
  public selected;
  public setClickedRow;
  public source;
  public destination = "";
  public adults = 0;
  public date;
  public databaseTable;
  base_url = "https://api.railwayapi.com";
  key = "8uorlkq7jv";
  public str;

  public arr = [];
  public showTable: boolean = false;
  public noTrain: boolean = false;
  public againRequest: boolean = false;
  public dummyData: boolean = true;
  public notLogin = true;
  public loggedIn = false;
  public mytime = new Date();
  categories: any[] = [
    { id: 'AI', name: 'Adipur' },
    { id: 'AD', name: 'Adoni' },
    { id: 'ANDI', name: 'Delhi' },
    { id: 'AGA', name: 'Agra' },
    { id: "PTA", name: 'Patiala' },
    { id: 'AHH', name: 'Ahmadgarh' },
    { id: 'SBC', name: 'Bangalore' },
    { id: 'BSPN', name: 'Bassi Pathanam' },
    { id: 'PNVL', name: 'Mumbai' }
  ];
  currentYear: any = this.mytime.getUTCFullYear();
  currentDate: any = this.mytime.getUTCDate() - 1;
  currentMonth: any = this.mytime.getUTCMonth() + 1;

  constructor(private http: HttpClient, private service: LoginService, private router: Router,
    private spinnerService: Ng4LoadingSpinnerService) {
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    }
  }

  public getSourceValue(value) {
    console.log(value);
    this.source = value;
  }
  public getDestValue(value) {
    console.log(value);
    this.destination = value;
  }
  private myDatePickerOptions: IMyOptions = {
    disableUntil: { year: this.currentYear, month: this.currentMonth, day: this.currentDate },
    dateFormat: 'dd-mm-yyyy'
  };

  public ShowTrains() {
    this.spinnerService.show();
    this.str = this.date.formatted.replace(".", "");
    this.str = this.str.replace(".", "-");
    var api_search = this.base_url + '/v2/between/source/' + this.source + '/dest/' + this.destination +
      '/date/' + this.str + '/apikey/' + this.key + '/';
    this.http.get<any>(api_search).subscribe( //get just made the request not send it to server
      response => {
        console.log(response);
        this.dummyData = false;
        if (response.response_code == 200) {
          this.databaseTable = response;
          for (let i = 0; i < this.databaseTable.trains.length; i++) {
            this.arr[i] = this.databaseTable.trains[i];
          }
          this.showTable = true;
          this.noTrain = false;
          this.againRequest = false;
        }
        else if (response.response_code == 210) {
          this.dummyData = false;
          this.noTrain = true;
          this.showTable = false;
          this.againRequest = false;
        }
        else if (response.response_code == 405) {
          this.dummyData = false;
          this.againRequest = true;
          this.noTrain = false;
          this.showTable = false;
        }
        this.spinnerService.hide();
      }, error => {
        swal("some error while connecting", "", "error");
      }
    );
  }
  public marked = new Array(15).fill(0);
  public check(i) {
    let c = 0;
    if (this.marked[i] == 0)
      this.marked[i] = 1;
    else
      this.marked[i] = 0;
    for (let j = 0; j < this.databaseTable.trains.length; j++)
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
      for (let i = 0; i < this.databaseTable.trains.length; i++) {
        if (this.marked[i] == 1) {
          let httpHeaders = new HttpHeaders({ 'Contant-Type': 'application/json' });
          let id = this.service.getId();
          let data =
            {
              "id": id,
              "from": this.arr[i].from_station.name + "-" + this.arr[i].to_station.name,
              "trainName": this.arr[i].name,
              "departureTime": this.arr[i].src_departure_time,
              "arrivalTime": this.arr[i].dest_arrival_time,
              "duration": this.arr[i].travel_time,
              "number": this.arr[i].number
            };
          this.http.post('http://localhost:4000/api/train', data, { observe: 'response' })
            .subscribe(response => {
              let status = response.status;
              let title = response.body;
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
