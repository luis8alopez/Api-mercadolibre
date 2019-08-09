import { Component} from '@angular/core';
import { RestMLService } from '../rest-ml.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products: any = [];

  constructor(public rest: RestMLService, private route: ActivatedRoute, private router: Router) { }

  getProduct(search: string) {
    if (!search) { return; }
    this.products = [];
    this.rest.getProduct(search).subscribe((data: {}) => {
      this.products = data;
      console.log(data);
    });
  }
}
