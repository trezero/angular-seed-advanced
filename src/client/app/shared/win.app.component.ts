// any operators needed throughout your application
import './win.operators';

import {Component, OnInit} from '@angular/core';

import { AnalyticsService } from '../modules/analytics/services/index';
import { LogService, AppService } from '../modules/core/services/index';
import { Config } from '../modules/core/utils/index';
/*import {WinService} from "./win/win-service";*/


@Component({
  moduleId: module.id,
  selector: 'win-app',
  templateUrl: './win.app.component.html'
})
export class WinAppComponent {

  constructor(
    public analytics: AnalyticsService,
    public log: LogService,
    private appService: AppService
  ) {
    log.debug(`Config env: ${Config.ENVIRONMENT().ENV}`);

  }

  calculateBytes(bytes) {
    if (bytes == null)
      return "0";

    if(bytes==0)
      return "0";

    return(((((bytes / 1024) / 1024) / 1024) / 1024)).toFixed(2);
  }

}
