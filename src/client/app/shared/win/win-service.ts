import {Injectable, Input, Output} from '@angular/core';

import {Http, Headers} from "@angular/http";
import {LocalStorage} from "../libs/local-storage";
import {Store} from "@ngrx/store";
import {AppVersion} from "../libs/app-version";


@Injectable()
export class WinService {

  localStore: LocalStorage;

  constructor( private http: Http )
  {
    this.localStore = new LocalStorage();
  }


  init() {
    console.log("WIN data-model service init..");
    //get stored devices
    //var currentDevices = this.localStore.getObjectArray('savedDevices');
    //console.log('saved devices is: ', currentDevices);
  }

 /* checkSoftwareUpdate() {

    return new Promise((resolve, reject) => {

      let currentVersion: string = new AppVersion().currentVersion;

      console.log('Check software update, process version: ', currentVersion);

      let updateInfoUrl: string = "http://35.164.89.128:3000/software/latest";

      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.get(updateInfoUrl, { header: headers })
        .map(res => res.json())
        .subscribe(retSoftware => {

          if(retSoftware.obj){
            let software: SoftwareUpdateObjectAPI = new SoftwareUpdateObjectAPI(
              retSoftware.obj._id,
              retSoftware.obj.version,
              retSoftware.obj.macosBinaryUrl,
              retSoftware.obj.windowsBinaryUrl,
              retSoftware.obj.changelog);

            let retVal: AppUpdateInfo = new AppUpdateInfo(currentVersion, software.version, software.windowsBinary, software.macosBinary, software.changelog);
            resolve(retVal);
          } else {
            reject(false);
          }

        }),
        error => {
          const err = error;
          console.log('error getting latest software version: ', err);
          reject(false);
        };

    }).catch(e => {
      console.log(e);
    });

  }*/

}
