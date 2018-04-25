//import {lifecycleComponent} from './lifecycle/lifecycle.component'

import {Component,Injectable} from '@angular/core';
import { LogService ,LogService2} from './son/log.service'


@Component({selector: 'lifecycle', template: `
   <page-header>
   <h6>lifecycle</h6>
   </page-header>
   

   <div nz-row>
      <div nz-col [nzSpan]="12">
      <button (click)='sonShow($event)' >{{IsSon?"销毁":"创建"}}</button>
      <button (click)='clear($event)' >清空</button>
      <button (click)='setSonName($event)' >更新</button>
      <son *ngIf='IsSon' [name]='sonName'></son>
      </div>
      <div nz-col [nzSpan]="12">
      <nz-timeline *ngFor='let log of Logs'>
      <nz-timeline-item>{{log.Time | date : 'HH:mm:SS.SSS'}}---{{log.Text}}</nz-timeline-item>
     
    </nz-timeline>
      </div>
    </div>

 

  
  
`})
export class lifecycleComponent {

  constructor(private LogService : LogService,private LogService2 : LogService2) {}
  IsSon = true;

  get Logs() {
    return this.LogService.Logs;
  }

  setSonName(event){
    event.stopPropagation();
    this.sonName = new Date().toString();
  }

  sonName = "son";

  sonShow() {
    event.stopPropagation();
    this.IsSon = !this.IsSon;
  }
  clear(){
    event.stopPropagation();
    this.LogService.clear();
  }
}

export interface ILog {
  Text : string;
  Time : Date;
}





