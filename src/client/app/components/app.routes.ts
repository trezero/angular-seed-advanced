// app

import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { WinRoutes } from '../shared/win.app.routes';


export const routes: Array<any> = [
  ...WinRoutes
];


/*export const routes: Array<any> = [
  ...HomeRoutes,
  ...AboutRoutes
];*/
