import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xp-button',
  templateUrl: './xp-button.component.html',
  styleUrls: ['./xp-button.component.css']
})
export class XpButtonComponent implements OnInit {

  @Input() btnName: string;
  @Input() btnType: string;

  public typeClass = {
    'default-btn': false,
    'cancel-btn': false
  };

  constructor() { }

  ngOnInit() {

    if (this.btnType === 'cancel') {
      this.typeClass["cancel-btn"] = true;
    } else {
      this.typeClass["default-btn"] = true;
    }

  }

}
