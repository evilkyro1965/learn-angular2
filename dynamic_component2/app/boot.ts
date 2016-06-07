import {bootstrap} from '@angular/platform-browser-dynamic';
import { Component, EventEmitter, DynamicComponentLoader, ElementRef, ViewContainerRef } from "@angular/core";
import {Dropdown} from 'primeng/primeng';

@Component({
  selector: 'child-component',
  template: 'Child'
})
class ChildComponent {
}

@Component({
  selector: 'main-app',
  template: "<a (click)='clicked()'>Change</a>"
})

class MainApp {
	
  selected : string;

  cities: SelectItem[];

  constructor(dcl: DynamicComponentLoader, viewContainerRef: ViewContainerRef) {
  	
  	this.cities = [];
    this.cities.push({label:'New York', value:'New York'});
    this.cities.push({label:'Rome', value:'Rome'});
    this.cities.push({label:'London', value:'London'});
    this.cities.push({label:'Istanbul', value:'Istanbul'});
    this.cities.push({label:'Paris', value:'Paris'});

    this.selected = 'Rome';

    dcl.loadNextToLocation(Dropdown, viewContainerRef)
    .then((res) => {
      res.instance.options = this.cities;
      res.instance.value = this.selected;
    });

  }

  clicked(): void {
  	console.log("hi");
    this.selected = 'Paris';
  }

}


bootstrap(MainApp);