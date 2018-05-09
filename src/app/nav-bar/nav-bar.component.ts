import { Component, OnInit, OnChanges } from '@angular/core';
import { LoginService } from '../login.service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  constructor(private http:HttpClient, private logser:LoginService,private router:Router) { }
  public flag = 1;
  public Loggin:boolean = false;
  public email;
  
  private userSubs: Subscription;
  
  ngOnInit() {
    this.userSubs = this.logser.authChange.subscribe( user => {
      console.log("adasd"+user);
      this.Loggin = user;
      if(this.Loggin == true){
        this.email = this.logser.getEmail();
        console.log(this.email);
      }
   });
   
  }

  public setSpace(){
    if(this.flag == 1){
    document.getElementById("space").style.marginLeft="0px";
    this.flag = 0;
    }
    else{
      document.getElementById("space").style.marginLeft="450px";
    this.flag = 1;
    }
  }

  public change()
  {
    let id = this.logser.getId();
    this.http.get('http://localhost:4000/api/login').subscribe(
      response => {
        this.email = response;
        console.log(this.email);
      }, error => {
        swal("some error","","error");
      }
    )
  }

  public logout()
  {
    this.logser.setLogout();
    this.router.navigate(['/home']);
  }
}
