import { Component, OnInit } from '@angular/core';
import { CheckDataService } from './check-data.service';
import { CheckItem } from './check-item';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
  CHECK_LIST_INIT: number = 3;
  checkList: CheckItem[];

  constructor(public checkDataService: CheckDataService) {
    this.checkList = checkDataService.initList(this.CHECK_LIST_INIT);
  }

  ngOnInit() {
  }

  onChecked(checkItem: CheckItem) {
    checkItem.isChecked = !checkItem.isChecked;
    this.checkDataService.onChecked(checkItem);
  }

  onChangeCnt(op: string): void {
    this.checkDataService.changeTotalCount(op);
  }
}
