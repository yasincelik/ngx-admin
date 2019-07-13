import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { StrategyRoutingModule, routedComponents } from './strategy-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    StrategyRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class StrategyModule { }
