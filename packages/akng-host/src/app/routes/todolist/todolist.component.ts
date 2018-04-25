import {Component} from '@angular/core';

@Component({selector: 'todolist', template: `
           <div>  
           <input nz-input placeholder="Basic usage" [(ngModel)]="value"></div>
           <div></div>
        `})
export class TodolistComponent {

    value : string;
}