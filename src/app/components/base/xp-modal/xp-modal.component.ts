import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'xp-modal',
  templateUrl: './xp-modal.component.html',
  styleUrls: ['./xp-modal.component.css']
})
export class XpModalComponent implements OnInit {

  @Input() isOpen = true;
  @Input() modalHeader: string;
  @Output() closed: EventEmitter<boolean> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.isOpen = false;
    this.closed.emit(this.isOpen);
  }

}
