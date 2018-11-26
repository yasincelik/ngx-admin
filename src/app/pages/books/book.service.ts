import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Book } from './book.model';

/*const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};*/


@Injectable()
export class BookService {

  public API = '//localhost:8080';
  public BOOK_API = this.API + '/api';


  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<any> {
    return this.http.get('//localhost:8080/api/books');
  }

  get(id: number) {
    return this.http.get(this.BOOK_API + '/books/' + id);
  }

  public createBook(book) {
    // let result: Observable<Object>;
    return this.http.post<Book>(this.BOOK_API + '/books/create', book);
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
