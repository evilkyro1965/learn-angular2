import {bootstrap} from '@angular/platform-browser-dynamic';
import { HostListener, provide, Input, Injectable, ElementRef,
	Inject, Directive, Component } from "@angular/core";

class Overlay {
	private el : HTMLElement;
	constructor() {
		var el = document.createElement('div');
		el.className = 'tooltip';
		this.el = el;
	}

	close() {
		this.el.hidden = true;
	}

	open(el, text) {
		this.el.innerHTML = text;
		this.el.hidden = false;
		var rect = el.nativeElement.getBoundingClientRect();
		this.el.style.left = rect.left + 'px';
    	this.el.style.top = rect.top + 'px';
	}

	attach(target) {
		target.appendChild(this.el);
	}

	detach() {
		this.el.parentNode.removeChild(this.el);
	}
}

@Directive({
  selector: '[saTooltip]'
})
export class Tooltip {
	@Input()
	saTooltip : string;
 
	constructor(private el: ElementRef, private overlay: Overlay) {
		this.overlay.attach(el.nativeElement);
	}

	@HostListener('mouseenter')
	onMouseEnter() {
		this.overlay.open(this.el, this.saTooltip);
	}

	@HostListener('mouseleave')
	onMouseLeave() {
		this.overlay.close();
	}
}

@Component({
	selector: 'main-app',
	template: `
		<div saTooltip="Hello world!">
		Test
		</div>

		<div saTooltip="Hello world!">
		Test2
		</div>
	`,
	providers: [Overlay],
	directives: [Tooltip]
})

class MainApp {


	constructor() {

	}

}


bootstrap(MainApp);