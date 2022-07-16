import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { PatientComponent } from './patient/patient.component';
import { DoctoeComponent } from './doctoe/doctoe.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
  const appRoutes: Routes = [
    {
      path:'',component:HomeComponent
    },
    {
path:'login',component:LoginComponent
    },
      { path: 'patient', component: PatientComponent },
     { path: 'doctor', component: DoctoeComponent },
     { path: 'admin', component: AdminComponent },
   ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainhomeComponent,
    PatientComponent,
    DoctoeComponent,
    AdminComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
        ReactiveFormsModule ,
        RouterModule.forRoot(appRoutes)
  ],
    exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
