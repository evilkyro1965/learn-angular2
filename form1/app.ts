import { bootstrap } from "angular2/platform/browser";
import { Component, EventEmitter } from "angular2/core";
import { NgForm }    from 'angular2/common';

@Component({
	selector: 'customer-form',
	template: `
		<div>
			Name : <input type='text' [(ngModel)]="name" />
		</div>
		<div>
			City : 
			<select [(ngModel)]="city">
				<option *ngFor="#selectCity of arrCity" [value]="selectCity">{{selectCity}} 
				</option>
			</select>
		</div>	
		<div>
			Customer Type : 
			<div *ngFor="#selectCustomerType of arrCustomerType">
			<input type="radio"[(ngModel)]="customerType" name="customerType" />{{selectCustomerType}}<br>
			</div>
		</div>		
		<div>{{name}}</div>	
		<div>{{city}}</div>	
		<div>{{customerType}}</div>	
	`
})

class CustomerForm {
	
	arrCity : string[];
	arrCustomerType : string[];
	name : string;
	city : string;
	customerType : string;

	constructor() {
		this.arrCity = ['','Medan','Kuala Lumpur'];
		this.arrCustomerType = ['Silver','Platinum'];

		this.name = '';
		this.city = '';
		this.customerType = 'Silver';
	}


}

@Component({
	selector: 'main-app',
	directives: [CustomerForm],
	template: `
			<customer-form></customer-form>
		`
})

class MainApp {

	constructor() {

	}

}


bootstrap(MainApp);