import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xp-expense-type',
  templateUrl: './xp-expense-type.component.html',
  styleUrls: ['./xp-expense-type.component.css']
})
export class XpExpenseTypeComponent implements OnInit {

  @Input() name: string;
  @Input() type: string;
  @Input() cost: string;
  @Input() fontSize: string;

  constructor() { }

  ngOnInit() {
  }

}
