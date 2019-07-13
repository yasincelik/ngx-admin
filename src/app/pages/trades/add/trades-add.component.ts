import { Component } from '@angular/core';
import { Trade } from '../trade.model';
import { TradeService } from '../trade.service';

@Component({
  templateUrl: './trades-add.component.html',
})
export class TradeAddComponent {

  trade: Trade = new Trade();

  constructor(/*private router: Router, */private tradeService: TradeService) {

  }

  createTrade(): void {
    this.tradeService.createTrade(this.trade)
      .subscribe( data => {
        alert('Book created successfully.');
      });

  }

}
