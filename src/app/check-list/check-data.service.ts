import { Injectable, EventEmitter } from '@angular/core';
import { CheckItem } from './check-item';

@Injectable()
export class CheckDataService {
  checkList: CheckItem[] = [];
  checkListChangeEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  initList(size: number): CheckItem[] {
    for(let i=0; i<size; i++) {
      this.checkList.push(this.createCheckItem(i));
    }

    return this.checkList;
  }

  private createCheckItem(idx: number): CheckItem {
    return {idx: idx, content: `CheckItem ${idx+1}`, isChecked: false};
  }

  onChecked(checkItem: CheckItem) {
    console.log("CHECK" + checkItem);
    this.checkListChangeEvent.emit({});
  }

  onRemove(checkItem: CheckItem) {
    console.log("UNCHECK" + checkItem);
    checkItem.isChecked = false;
    this.checkListChangeEvent.emit({});
  }

  getCheckedItemRatioText(): string {
    const checkedCnt = this.checkList.filter(i => i.isChecked).length;
    const totalCnt = this.checkList.length;
    const roundedRatio = Math.round((checkedCnt / totalCnt) * 100);
    return `${roundedRatio}%`
  }

  changeTotalCount(op: string) {
    if( op === '+' ) {
      this.checkList.push( this.createCheckItem(this.checkList.length));
    } else if( op === '-' ) {
      this.checkList.pop();
    }

    this.checkListChangeEvent.emit({});
  }
}
