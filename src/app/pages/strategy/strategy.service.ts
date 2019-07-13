import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';

import { Strategy } from './strategy.model';

/*const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};*/


@Injectable()
export class StrategyService {

  public API = '//localhost:8080/api';



  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<any> {
    return this.http.get(this.API + '/strategy');
  }

  get(id: number) {
    return this.http.get(this.API + '/strategy/' + id);
  }

  public createStrategy(strategy) {
    // let result: Observable<Object>;
    return this.http.post<Strategy>(this.API + '/strategy/create', strategy);
  }

  /*public createBook(book: any): Observable<any> {
    let result: Observable<Object>;
    if (book['href']) {
      result = this.http.put(this.CAR_API + '/books/create', book);
    } else {
      result = this.http.post(this.CAR_API + '/books/create', book);
    }
    return result;
  }*/

  remove(href: string) {
    return this.http.delete(href);
  }
}
