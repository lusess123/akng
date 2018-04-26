import {Component} from '@angular/core';
import {TodolistService} from './todolist.service'

@Component(
    {
        providers: [TodolistService], 
        selector: 'todolist', 
        template: `
   <page-header>
   <h6>todolist demo</h6>
   </page-header>
   <div>  
   <input nz-input  (keyup.enter)="add()"   (blur)="add()" [(ngModel)]="vm.AddText" />
   <div><br/></div>
   <ul *ngFor='let textInfo of vm.List' >
   <li>{{textInfo.Text}}<button (click)="del(textInfo.Text)">删除</button></li>
   </ul>
    </div>
        `}
    )
export class TodolistComponent {

    constructor(public vm : TodolistService) {}

    add() {
        //alert(this.vm.AddText);
        this
            .vm
            .add(this.vm.AddText);
        this.vm.AddText = "";
        //
    }
    del(text : string) {
        this
            .vm
            .remove(text);
    }

    get List(){
        return this.vm.List.filter(a=>a.Text);
   }
}