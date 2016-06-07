import { bootstrap } from "angular2/platform/browser";
import { Component, EventEmitter } from "angular2/core";

@Component({
	selector: 'single-component',
	outputs: ['putRingOnIt'],
	template: `
			<button (click)="liked()">Like it ?</button>
		`
})

class SingleComponent {
	putRingOnIt : EventEmitter<string>;

	constructor() {
		this.putRingOnIt = new EventEmitter();
	}

	liked() {
		this.putRingOnIt.emit("oh oh oh");
	}
}

@Component({
	selector: 'main-app',
	directives: [SingleComponent],
	template: `
			<single-component (putRingOnIt)="singleComponentClicked($event)"></single-component>
		`
})

class MainApp {

	constructor() {
	}

	singleComponentClicked(message : string) {
		console.log(message);
	}

}


bootstrap(MainApp);