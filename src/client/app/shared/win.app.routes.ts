import {MainComponent} from "./main/main.component";

export const WinRoutes: Array<any> = [
  {path: 'main', component: MainComponent},
  {path: 'gui', component: MainComponent },
  {path: '', redirectTo: 'main', pathMatch: 'full' }
];


