import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { IMenu } from '@uilab/core-angular/app';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'testavapps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app1';

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

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
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
}
