import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  vibrationDuration = 1000;
  isVibrating: boolean = false;
  vibrateTimeoutID;

  constructor(private vibration: Vibration) { }

  vibrate() {
    clearTimeout(this.vibrateTimeoutID);
    this.isVibrating = true;
    
    this.vibration.vibrate(this.vibrationDuration);
    this.vibrateTimeoutID = setTimeout(this.didVibrate.bind(this), this.vibrationDuration);
  }

  didVibrate() {
    this.isVibrating = false;
  }
}
