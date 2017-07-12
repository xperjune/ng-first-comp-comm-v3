import { Component, OnInit } from '@angular/core';
import { CheckDataService } from '../../check-data.service';

@Component({
  selector: 'app-check-graph',
  templateUrl: './check-graph.component.html',
  styleUrls: ['./check-graph.component.css']
})
export class CheckGraphComponent implements OnInit {
  checkedRatio: string = '0%';
  graphToggle: boolean = true;

  constructor(public checkDataService: CheckDataService) { }

  ngOnInit() {
    this.checkDataService.checkListChangeEvent.subscribe(() => this.printGraph());
  }

  printGraph() {
    this.graphToggle = false;
    this.checkedRatio = this.checkDataService.getCheckedItemRatioText();
    setTimeout(() => this.graphToggle = true, 1);
  }
}
