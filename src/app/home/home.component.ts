import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private route:Router){} 

  ngOnInit(): void {
  }
myFunc()
{
this.route.navigate(['patient']);  
}
myFunc1()
{
this.route.navigate(['doctor']);  
}
myFunc2()
{
this.route.navigate(['admin']);  
}

}
