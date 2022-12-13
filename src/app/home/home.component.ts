import { Component, OnInit } from '@angular/core';
import { FinancialService } from '../services/financial.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public financialBoxOfficeRevenue: any = null;
  public northwindEmployees: any = null;
  public financialGlobalElectricityDemand: any = null;

  constructor(
    private financialService: FinancialService,
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.financialService.getData('BoxOfficeRevenue').subscribe(data => this.financialBoxOfficeRevenue = data);
    this.financialService.getData('GlobalElectricityDemand').subscribe(data => this.financialGlobalElectricityDemand = data);
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
  }
}
