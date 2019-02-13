import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xp-accordion',
  templateUrl: './xp-accordion.component.html',
  styleUrls: ['./xp-accordion.component.css']
})
export class XpAccordionComponent implements OnInit {

  public isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

}
