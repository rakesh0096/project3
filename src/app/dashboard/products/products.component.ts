import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: any
  constructor(private service: MainService){ }
  
  getProducts(){
    this.service.getProducts()
    .subscribe(res => {
        this.products = res.data;
        console.log(this.products);
    })
  }

  ngOnInit() {
    this.getProducts();
  }

}
