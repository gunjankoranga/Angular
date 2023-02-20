import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private mydata:HttpClient) { }
//it is made to get the data from db.json (database).
user()
{
  return this.mydata.get("http://localhost:3000/addtocart")
}



//at first to add products in addcart
cart()
{
  return this.mydata.get("http://localhost:3000/cart")
}



//to get the product details and show in addtocard page
getproduct(id:any)
{
  return this.mydata.get(`http://localhost:3000/addtocart/${id}`)
}


//after click on addtocart button addcart() is used to show the product details in card by getting id
addcart(data:any)
{
  console.log("data is= "+data)
  let dt={"name":data.pname, "cat":data.pcat,"amount":data.pamount, "image":data.img}
  return this.mydata.post(`http://localhost:3000/cart/`,dt)
}

//it shows the items in cart  
showcart()
{
  return this.mydata.get("http://localhost:3000/cart")
}

//to remove items from cart
remove(id:any)
{
return this.mydata.delete(`http://localhost:3000/cart/${id}`)
}
}
