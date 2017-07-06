import {Component, OnInit} from '@angular/core';
// any operators needed throughout your application
import './operators';

import { AnalyticsService } from '../modules/analytics/services/index';
import { LogService, AppService } from '../modules/core/services/index';
import { Config } from '../modules/core/utils/index';
import {WinService} from "./win/win-service";


@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: './win.app.component.html'
})
export class WinAppComponent {

  constructor(
    public analytics: AnalyticsService,
    public log: LogService,
    private appService: AppService,
    public winDeviceService: WinService
  ) {
    log.debug(`Config env: ${Config.ENVIRONMENT().ENV}`);
    this.winDeviceService.init();
  }

  calculateBytes(bytes) {
    if (bytes == null)
      return "0";

    if(bytes==0)
      return "0";

    return(((((bytes / 1024) / 1024) / 1024) / 1024)).toFixed(2);
  }

}
