import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _dashboardService:DashboardService) { }

  public color="warn"
  public total_records = 100;
  public record_limit = 5;
  public devices = [];

  public stock_status_strings =  {
    authenticate : 'Authenticated',
    registered: 'Device Registered',
    ready_to_sell: 'Ready to sell',
    sold : "Sold",
    activated : 'Activated'
  }

  ngOnInit() {
    this.loadRecords(0, this.record_limit);
  }

  loadRecords(offset, limit)
  {
    this._dashboardService.getDevices(offset, limit)
      .then((records) => 
      {
        this.devices = records;
      });
  }

  paginationChange(event)
  {
    let page_number = event.pageIndex;
    let record_limit = event.pageSize;

    this.loadRecords((page_number*record_limit), record_limit);
  }

}
