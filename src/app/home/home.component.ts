import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  //pdata contain all the data in services exits
  pdata:any=[];
  constructor(private abc:MyserviceService, private route:Router){
this.abc.user().subscribe((data)=>
{
  this.pdata=data
})
  }

}
