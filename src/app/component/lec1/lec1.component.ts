import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
@Component({
  selector: 'app-lec1',
  templateUrl: './lec1.component.html',
  styleUrls: ['./lec1.component.css']
})
export class Lec1Component implements OnInit {

  products: Observable<any[]>;
  constructor(private ps: ProductService) {
  }

  ngOnInit() {
    this.products = this.ps.getProducts();
  }

  deleteProduct(product: any) {
    const obs = this.ps.deleteProduct(product.id);
    obs.subscribe(productFromFirebase => {
      window.alert('product with id: ' +
        productFromFirebase.id + ' is Deleted');
    }, error1 => {
      window.alert('product not found id: ' + product.id);
    });
  }
}