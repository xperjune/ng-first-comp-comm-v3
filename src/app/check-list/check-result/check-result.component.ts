import { Component, OnInit } from '@angular/core';
import { CheckDataService } from '../check-data.service';
import { CheckItem } from '../check-item';

@Component({
  selector: 'app-check-result',
  templateUrl: './check-result.component.html',
  styleUrls: ['./check-result.component.css']
})
export class CheckResultComponent implements OnInit {
  checkedList: CheckItem[] = [];
  constructor(public checkDataService: CheckDataService) { }

  ngOnInit() {
    this.checkDataService.checkListChangeEvent.subscribe(
      () => this.showCheckedList()
    );
  }

  showCheckedList() {
    this.checkedList = this.checkDataService.checkList.filter(c=> c.isChecked);
  }

  onRemove(checkItem: CheckItem) {
    this.checkDataService.onRemove(checkItem);
  }
}
