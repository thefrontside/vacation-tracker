import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Product {
  title: String = '';
  date: Date = null;

  constructor({ title, date }) {
    this.title = title;
    this.date = new Date(date);
  }
}

interface ProductsPayload {
  products: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL = '/api/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get(this.API_URL + 'products')
      .pipe(
        map((data: ProductsPayload) => data.products.map(d => new Product(d)))
      );
  }
}
