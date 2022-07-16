import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-doctoe',
  templateUrl: './doctoe.component.html',
  styleUrls: ['./doctoe.component.css']
})
export class DoctoeComponent implements OnInit {

form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
    
   });
    constructor(private route:Router) { }
  
    get firstname(){
      return this.form.get('firstName')
    }
    ngOnInit() {
    }
  
    onSubmit(){
      alert(JSON.stringify(this.form.value));
    }
     login()
    {
      this.route.navigate(['login']);  
    }
}
