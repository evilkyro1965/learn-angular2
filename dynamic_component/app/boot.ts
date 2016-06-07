import {bootstrap} from '@angular/platform-browser-dynamic';
import { Component, EventEmitter, DynamicComponentLoader, ElementRef, ViewContainerRef } from "@angular/core";

@Component({
  selector: 'child-component',
  template: 'Child'
})
class ChildComponent {
}

@Component({
  selector: 'main-app',
  template: 'Parent'
})

class MainApp {

  constructor(dcl: DynamicComponentLoader, viewContainerRef: ViewContainerRef) {
    dcl.loadNextToLocation(ChildComponent, viewContainerRef);
  }

}


bootstrap(MainApp);