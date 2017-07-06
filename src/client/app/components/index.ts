import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {WinAppComponent} from "../shared/win.app.component";

export const APP_COMPONENTS: any[] = [
  AppComponent,
  AboutComponent,
  HomeComponent,
  WinAppComponent
];

export * from './app.component';
export * from './about/about.component';
export * from './home/home.component';
export * from '../shared/win.app.component';
