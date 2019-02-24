import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xp-cost',
  templateUrl: './xp-cost.component.html',
  styleUrls: ['./xp-cost.component.css']
})
export class XpCostComponent implements OnInit {

  @Input() cost: string;
  @Input() fontSize: string;

  constructor() { }

  ngOnInit() {
  }
}
