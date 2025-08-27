import { ShellyPlusRGBWPm } from 'shellies-my';

import { DeviceDelegate } from './base';

/**
 * Handles Shelly Pro Dimmer 2PM devices.
 */
export class ShellyPlusRGBWPmDelegate extends DeviceDelegate {
  protected setup() {
    const d = this.device as unknown as ShellyPlusRGBWPm;

    this.addLight(d.light0);
    this.addLight(d.light1);
    this.addLight(d.light2);
    this.addLight(d.light3);
  }
}

DeviceDelegate.registerDelegate(ShellyPlusRGBWPmDelegate, ShellyPlusRGBWPm);
