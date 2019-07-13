import { Component } from '@angular/core';
import { Strategy } from '../strategy.model';
import { StrategyService } from '../strategy.service';

@Component({
  templateUrl: './strategy-add.component.html',
})
export class StrategyAddComponent {

  strategy: Strategy = new Strategy();

  constructor(/*private router: Router, */private strategyService: StrategyService) {

  }

  createStrategy(): void {
    this.strategyService.createStrategy(this.strategy)
      .subscribe( data => {
        alert('Book created successfully.');
      });

  }

}
