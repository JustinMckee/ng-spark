import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio/portfolio.service';

@Component({
  selector: 'app-portolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  providers: [ PortfolioService ]
})
export class PortfolioComponent implements OnInit {

  public portfolioItems: Object = [];

  constructor( private portfolioService: PortfolioService ) { }

  ngOnInit() {
    this.loadPortfolio();
  }

  loadPortfolio () {
    this.portfolioService.getPortfolioItems()
    .subscribe( data => {
      this.portfolioItems = data
      console.log(this.portfolioItems);
    });
  }


}
