import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent {
  sdata:any;
constructor(private mydata:MyserviceService, private xyz:ActivatedRoute)
{
}
ngOnInit(){
  this.mydata.showcart().subscribe((data)=>
{
 this.sdata=data 
})

}

delete(id:any)
{
  this.mydata.remove(id).subscribe((data)=>
  {
this.ngOnInit()
  })

}
}
