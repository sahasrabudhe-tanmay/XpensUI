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
    'save-btn': false,
    'continue-btn': false,
    'cancel-btn': false,
    'add-btn': false
  };

  constructor() { }

  ngOnInit() {

    if (this.btnType === 'continue') {
      this.typeClass["continue-btn"] = true;
    } else if (this.btnType === 'save') {
      this.typeClass["save-btn"] = true;
    } else if (this.btnType === 'cancel') {
      this.typeClass["cancel-btn"] = true;
    } else if (this.btnType === 'add') {
      this.typeClass["default-btn"] = true;
      this.typeClass["add-btn"] = true;
      this.btnName = '+';
    } else {
      this.typeClass["default-btn"] = true;
    }

  }

}
