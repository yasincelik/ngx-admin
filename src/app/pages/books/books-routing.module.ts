import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books.component';
import { SmartTableComponent } from './list/book-list.component';

import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';
import {BookAddComponent} from './add/book-add.component';

const routes: Routes = [{
  path: '',
  component: BooksComponent,
  children: [
    {
      path: 'add',
      component: BookAddComponent,
    },
    {
    path: 'list',
    component: SmartTableComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  exports: [
    RouterModule,
  ],
  providers: [BookService],
})
export class BooksRoutingModule {

}

export const routedComponents = [
  BooksComponent,
  SmartTableComponent,
  BookAddComponent,
];
