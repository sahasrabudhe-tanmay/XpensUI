import { Component, OnInit, Input } from '@angular/core';
import { ExpenseType } from 'src/app/models/expense-type';

@Component({
  selector: 'xp-day',
  templateUrl: './xp-day.component.html',
  styleUrls: ['./xp-day.component.css']
})
export class XpDayComponent implements OnInit {

  @Input() header: string;

  public dayCost = '0';

  public expenseTypeList: ExpenseType[] = [];

  constructor() { }

  ngOnInit() {
    this.initExpenseTypeList();
    this.initDayCost();
  }

  initExpenseTypeList() {
    Object.values(ExpenseType.TYPES).forEach(expense => {
      this.expenseTypeList.push(expense);
    });
  }

  initDayCost() {
    this.expenseTypeList.forEach(expenseType => {
      expenseType.expenseList.forEach(expense => {
        expenseType.totalCost = Number(Number(expenseType.totalCost) + Number(expense.cost)).toString();
      });
      this.dayCost = Number(Number(this.dayCost) + Number(expenseType.totalCost)).toString();
    });
  }
}
