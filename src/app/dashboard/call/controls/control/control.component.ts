import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  @Input()
  icon;
  @Output()
  state = new EventEmitter();
  private isActive: Boolean;
  constructor() {}

  ngOnInit() {}

  handleClick() {
    this.state.emit({ isActive: this.isActive });
  }
}
