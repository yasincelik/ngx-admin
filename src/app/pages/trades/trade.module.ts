import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TradeRoutingModule, routedComponents } from './trade-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    TradeRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class TradeModule { }
