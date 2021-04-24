import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  deleteProduct(id: string): Observable<any> {
    return of([]);
  }

  getProducts(): Observable<any> {
    return of([{ id: 'abc' + '1', name: 'item' + '1', pictureId: 'abc' + '1' }]);
  }

}
