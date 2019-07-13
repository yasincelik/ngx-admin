import { Component } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  templateUrl: './book-add.component.html',
})
export class BookAddComponent {

  book: Book = new Book();

  constructor(/*private router: Router, */private bookService: BookService) {

  }

  createBook(): void {
    this.bookService.createBook(this.book)
      .subscribe( data => {
        alert('Book created successfully.');
      });

  }

}
