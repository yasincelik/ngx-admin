import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { BooksRoutingModule, routedComponents } from './books-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    BooksRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class BooksModule { }
