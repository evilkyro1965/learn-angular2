import {bootstrap} from '@angular/platform-browser-dynamic';
import { Component, EventEmitter } from "@angular/core";
import {Dropdown} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import {RadioButton} from 'primeng/primeng';


@Component({
	selector: 'main-app',
	directives : [Dropdown,RadioButton],
	template: `
			<p-dropdown [options]="cities" [(ngModel)]="selectedCity"></p-dropdown>

			<div *ngFor="let value of radioValues">
			<p-radioButton [value]="value" name="groupname" [(ngModel)]="selectedValue"></p-radioButton>{{value}}
			</div>
			{{selectedValue}}
		`
})

class MainApp {

	cities: SelectItem[];

    selectedCity: string;
    
    radioValues : string[];

    selectedValue: string = 'val1';

	constructor() {
		this.radioValues = ['val1','val2'];
		this.cities = [];
        this.cities.push({label:'New York', value:'New York'});
        this.cities.push({label:'Rome', value:'Rome'});
        this.cities.push({label:'London', value:'London'});
        this.cities.push({label:'Istanbul', value:'Istanbul'});
        this.cities.push({label:'Paris', value:'Paris'});
	}

}


bootstrap(MainApp);