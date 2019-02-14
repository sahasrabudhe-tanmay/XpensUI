import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xp-modal',
  templateUrl: './xp-modal.component.html',
  styleUrls: ['./xp-modal.component.css']
})
export class XpModalComponent implements OnInit {

  public isOpen = true;

  constructor() { }

  ngOnInit() {
  }

  toggleModal() {
    this.isOpen = !this.isOpen;
  }

}
