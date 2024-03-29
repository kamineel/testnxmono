import { Component } from '@angular/core';
import { IMenu } from '@uilab/core-angular/app';

@Component({
  selector: 'testavapps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app1';

  appNavigation: IMenu[] = [
    {
      name: 'Settings',
      icon: 'configuration--settings',
    },
    {
      name: 'Analysis',
      icon: 'navigation--oee-analysis',
    },
  ];
}
