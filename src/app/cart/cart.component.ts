import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
pdata:any;
constructor(private mydata:MyserviceService, private abc:ActivatedRoute){
let id=this.abc.snapshot.paramMap.get("pname");
this.mydata.getproduct(id).subscribe((data)=>{
  console.log(data);
 this.mydata.addcart(data).subscribe((dt)=>{

console.log("Add Successfully")

  })
})
}
}
