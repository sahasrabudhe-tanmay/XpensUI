import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
})
export class CostComponent implements OnInit {

  @Input() cost: string;

  constructor() { }

  ngOnInit() {
  }

}
