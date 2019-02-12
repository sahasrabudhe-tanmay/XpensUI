import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xp-dropdown',
  templateUrl: './xp-dropdown.component.html',
  styleUrls: ['./xp-dropdown.component.css']
})
export class XpDropdownComponent implements OnInit {

  @Input() options: string[] = [];
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

}
