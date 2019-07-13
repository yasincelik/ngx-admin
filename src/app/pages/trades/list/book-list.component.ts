import {Component, OnInit} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

// import { SmartTableService } from '../../../@core/data/smart-table.service';

import { TradeService } from '../trade.service';


@Component({
  selector: 'ngx-smart-table',
  templateUrl: './book-list.component.html',
  styles: [`nb-card {transform: translate3d(0, 0, 0);}`],
})
export class SmartTableComponent implements OnInit {

  books: Array<any>;

  source: LocalDataSource = new LocalDataSource();

  constructor(private bookService: TradeService) {
    this.bookService.getBooks().subscribe(data => {
      this.source.load(data);
    });
  }

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      title: {
        title: 'Title',
        type: 'string',
      },
      author: {
        title: 'Author',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      published: {
        title: 'Published',
        type: 'number',
      },
    },
  };


  ngOnInit() {
    this.bookService.getBooks().subscribe(data => {
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
