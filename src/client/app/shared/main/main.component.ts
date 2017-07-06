import {OnInit, Component, ViewContainerRef, ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Store} from "@ngrx/store";

/*import {WinService} from "../win/win-service";
import {LocalStorage} from "../libs/local-storage";*/

/*import {NotificationsService} from "angular2-notifications/src/notifications.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap"*/

/*import * as bootstrap from '@ng-bootstrap/ng-bootstrap';*/




@Component({
  moduleId: module.id,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'] // ,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  private viewContainerRef: ViewContainerRef;



  /*  @ViewChild('softwareUpdateModal') softwareUpdateModal: NgbModal;
   @ViewChild('loginModal') loginModal: NgbModal;
   @ViewChild('aboutWINModal') aboutWINModal: NgbModal;
   @ViewChild('eulaModal') eulaModal: NgbModal;*/

  /*appUpdateInfo: AppUpdateInfo;*/

  /*  public options = {
   position: ["bottom", "right"],
   timeOut: 5000,
   lastOnBottom: true
   };*/

  constructor(viewContainerRef:ViewContainerRef) {

    this.viewContainerRef = viewContainerRef;

  }

  ngOnInit(): void {

  }

  ngOnChanges() {

  }

  ngAfterContentInit(): void {
    console.log('main.component ngAfterContentInit');

    /*    var that = this;
     setTimeout(function() {
     that.checkEULAStatus();
     }, 1000);

     this.eulaModal.onClose.subscribe(x => {
     console.log('closed eula modal, agreed to it, continuing app load...');
     });

     this.eulaModal.onDismiss.subscribe(x => {
     console.log('dismissed eula modal');
     if (typeof process === 'undefined') {
     console.log('process is not available, cannot exit app after eula dismissed...')
     } else {
     console.log('EULA - exiting because eula dismissed...');
     var electron = require('electron');
     var exitApp = electron.remote.require('./main.desktop').exitApp;
     exitApp();
     }

     });*/

  }

  /*  openLoginModal() {
   this.loginModal.open();
   }*/

/*  checkEULAStatus() {
    let localStore: LocalStorage = new LocalStorage();
    let eulaAgree = localStore.get("eula-agree");
    let showEula: boolean = false;

    /!*    if(eulaAgree){
     if(eulaAgree.trim() != 'yes'){
     showEula = true;
     }
     } else {
     showEula = true;
     }

     if(showEula) {
     console.log('Eula key value does not exist, show modal..');
     this.eulaModal.open();
     } else {
     console.log('Eula exists, continue app startup');
     }*!/

  }*/

  /*  checkSoftwareUpdate(){

   console.log('checking for software updates...');

   this.winService.checkSoftwareUpdate().then(response => {

   if (response) {

   console.log('check software update return value: ', response);

   this.appUpdateInfo = (response as AppUpdateInfo);

   let vc = new VersionCompare();
   if (vc.matches(this.appUpdateInfo.currentVersion, this.appUpdateInfo.newVersion) == false) {
   console.log("Opening software update modal");
   this.softwareUpdateModal.open();
   } else {
   console.log('Current version and new version match, no need for update...');
   this.openLoginModal();
   }

   } else {
   console.log('check software update returned undefined');
   this.openLoginModal();
   }

   },
   error => {
   console.log('Cannot check software update, software check returned error');
   this.openLoginModal();
   })

   }*/
}
