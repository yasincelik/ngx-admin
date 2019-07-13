import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrategyComponent } from './strategy.component';
// import { SmartTableComponent } from './list/book-list.component';

import { StrategyService } from './strategy.service';
import { HttpClientModule } from '@angular/common/http';
import {StrategyAddComponent} from './add/strategy-add.component';

const routes: Routes = [{
  path: '',
  component: StrategyComponent,
  children: [
    {
      path: 'add',
      component: StrategyAddComponent,
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
  providers: [StrategyService],
})
export class StrategyRoutingModule {

}

export const routedComponents = [
  StrategyComponent,
  // SmartTableComponent,
  StrategyAddComponent,
];
