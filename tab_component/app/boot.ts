import {bootstrap} from '@angular/platform-browser-dynamic';
import { Component, EventEmitter } from "@angular/core";

import {Tabs} from './tabs';
import {Tab} from './tab';

@Component({
  selector: 'main-app',
  template: `
    <tabs>
      <tab [tabTitle]="'Tab 1'">Tab 1 Content</tab>
      <tab tabTitle="Tab 2">Tab 2 Content</tab>
    </tabs>
  `,
  directives: [Tabs, Tab]
})

class MainApp {

  constructor() {
    this.name = 'Angular2'
  }

}


bootstrap(MainApp);