import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export class Product {
  title: String = "";
  date: Date = null;

  constructor({ title, date }: { title: string; date: string }) {
    this.title = title;
    this.date = new Date(date);
  }
}

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  API_URL: string = "/api/";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get(this.API_URL + "products").pipe(map((data: any[]) => data.map(d => new Product(d))));
  }
}
