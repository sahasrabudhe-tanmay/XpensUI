import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xp-accordion',
  templateUrl: './xp-accordion.component.html',
  styleUrls: ['./xp-accordion.component.css']
})
export class XpAccordionComponent implements OnInit {

  @Input() header: string;
  @Input() cost: string;
  @Input() headerFontSize: string = '30';

  public isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

}
