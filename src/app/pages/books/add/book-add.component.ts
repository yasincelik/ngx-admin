import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  templateUrl: './book-add.component.html',
})
export class BookAddComponent {

  book: Book = new Book();

  constructor(/*private router: Router, */private bookService: BookService) {

  }

  createUser(): void {
    this.bookService.createBook(this.book)
      .subscribe( data => {
        alert('Book created successfully.');
      });

  }

}
