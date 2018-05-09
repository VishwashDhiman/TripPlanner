import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class LoginService {
  authChange = new Subject<boolean>();//Sends data onChange
  private loggedIn = false;
  private id: String;
  private email;

  constructor() {
  }

  public setData(data) {
    this.loggedIn = true;
    this.id = data[0].id;
    this.email = data[1].name;
    let d = this.email.split("@");
    this.email = d[0];
    this.authChange.next(true);
  }

  public getLoggin() {
    return this.loggedIn;
  }

  public getId() {
    return this.id;
  }
  public setLogout() {
    swal('Successfully Logout', "", "success");
    this.id = "";
    this.email = "";
    this.loggedIn = false;
    this.authChange.next(false);
  }
  public getEmail() {
    return this.email;
  }
}
