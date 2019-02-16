import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  @Input() type: string;
  @Input() cost: string;
  @Input() name: string;
  @Input() fontSize: string = '20';

  constructor() { }

  ngOnInit() {
  }

}
