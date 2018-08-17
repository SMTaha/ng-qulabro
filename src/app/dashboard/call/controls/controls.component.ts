import { Component, OnInit, Output } from '@angular/core';
import {
  faMicrophone,
  faMicrophoneSlash,
  faVideo,
  faVideoSlash,
  faVolumeUp,
  faVolumeOff,
  faExpand,
  faCompress,
  faPhoneSlash,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from 'events';
@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Output()
  mute = new EventEmitter();

  faPhoneSlash = faPhoneSlash;
  faUsers = faUsers;

  icons = [
    {
      active: faMicrophone,
      inactive: faMicrophoneSlash,
      isActive: true
    },
    {
      active: faVideo,
      inactive: faVideoSlash,
      isActive: true
    },
    {
      active: faVolumeUp,
      inactive: faVolumeOff,
      isActive: true
    },
    {
      active: faExpand,
      inactive: faCompress,
      isActive: true
    }
  ];

  constructor() {}

  ngOnInit() {}

  handleState(state) {
    console.log('Handling state', state);
  }

  changeIcon(state, index) {
    this.icons[index].isActive = state;
    console.log(this.icons[index]);
    console.log(document.fullscreenElement);
    const el = document.documentElement;
    const rfs = el.requestFullscreen || el.webkitRequestFullScreen;
    const efs = (el as any).exitFullscreen;
    !state ? rfs.call(el) : document.webkitCancelFullScreen();
  }
}
