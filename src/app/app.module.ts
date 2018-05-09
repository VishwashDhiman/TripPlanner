import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import swal from 'sweetalert';
import { MyDatePickerModule } from 'mydatepicker';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import{ RouterModule,Routes } from '@angular/router';
import { NewPackageComponent } from './new-package/new-package.component';
import { TrainComponent } from './train/train.component';
import { FormsModule }   from '@angular/forms';
import{ HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { LoginService } from'./login.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes=[
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path: 'login',component:LoginComponent},
  {path: 'newpackage/login',component:LoginComponent},
  {path: 'home',component:MainPageComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'login/signup',component:SignupComponent},
  {path: 'newpackage',component:NewPackageComponent},
  {path: 'trains',component:TrainComponent},
  {path: 'signup/home', component:MainPageComponent},
  {path: 'login/signup/home', component:MainPageComponent},
  {path: '**' , component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    SignupComponent,
    MainPageComponent,
    NavBarComponent,
    NewPackageComponent,
    TrainComponent,
    PageNotFoundComponent
],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MyDatePickerModule,
    FormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot() 
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
