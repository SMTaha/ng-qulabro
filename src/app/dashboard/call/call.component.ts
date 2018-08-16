import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2,
  OnDestroy
} from '@angular/core';

import { CONFERENCE_NODE } from '../../common/constants';

import { Participant } from './participant';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('remoteView')
  remoteView: ElementRef;

  @ViewChild('selfView')
  selfView: ElementRef;

  participants: Participant[] = [];

  rtc: any;
  callType: string;
  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    this.finalise();
  }

  ngAfterViewInit() {
    this.rtc = new (<any>window).PexRTC();

    this.rtc.onSetup = this.doneSetup;
    this.rtc.onConnect = this.connected;

    this.rtc.onError = this.error;
    this.rtc.onDisconnect = this.remoteDisconnect;

    this.rtc.onParticipantCreate = this.participantCreate;
    this.rtc.onParticipantDelete = this.participantDelete;

    this.connect();
  }

  connect() {
    console.log('Connecting...');

    const bandwidth = 576;

    !!this.callType
      ? this.rtc.makeCall(
          'pexipdemo.com',
          'meet.demo',
          (Math.random() * 100).toFixed(0).toString(),
          bandwidth,
          this.callType
        )
      : this.rtc.makeCall(
          'pexipdemo.com',
          'meet.demo',
          (Math.random() * 100).toFixed(0).toString(),
          bandwidth
        );
  }

  doneSetup = (videoURL: string, pinStatus) => {
    this.renderer.setAttribute(this.selfView.nativeElement, 'src', videoURL);
    this.rtc.connect((Math.random() * 10000).toFixed(0));
  };

  connected = videoURL => {
    console.log('Connected');
    this.renderer.setAttribute(this.remoteView.nativeElement, 'src', videoURL);
  };

  error = e => {
    console.log('An error occured', e);
    this.finalise();
  };

  remoteDisconnect = () => {
    console.log('Remote Disconnected');
  };

  participantCreate = (participant: Participant) => {
    console.log(
      'Participant joind:',
      participant.display_name,
      participant.uuid
    );
    this.participants.push(participant);
    // Handle logic for participant creation scenario
  };
  participantDelete = ({ uuid }: { uuid: string }) => {
    console.log('Participant left:', uuid);

    // Hanlde login for participant deletion scenario
  };

  finalise() {
    console.log('Finalising');
    this.rtc.disconnect();
    this.remoteView.nativeElement.src = '';
  }
}
