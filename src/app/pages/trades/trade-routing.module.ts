import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradeComponent } from './trade.component';
import { SmartTableComponent } from './list/book-list.component';

import { TradeService } from './trade.service';
import { HttpClientModule } from '@angular/common/http';
import {TradeAddComponent} from './add/trades-add.component';

const routes: Routes = [{
  path: '',
  component: TradeComponent,
  children: [
    {
      path: 'add',
      component: TradeAddComponent,
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
  providers: [TradeService],
})
export class TradeRoutingModule {

}

export const routedComponents = [
  TradeComponent,
  // SmartTableComponent,
  TradeAddComponent,
];
