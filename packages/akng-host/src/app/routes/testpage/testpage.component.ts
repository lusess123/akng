import {Component, OnInit} from '@angular/core';
import {_HttpClient} from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd';

@Component(
    { 
        templateUrl: './testpage.component.html',
        styles:[
            `
            
      .steps-content {
        margin-top: 16px;
        border: 1px dashed #e9e9e9;
        border-radius: 6px;
        background-color: #fafafa;
        min-height: 200px;
        text-align: center;
        padding-top: 80px;
      }

      .steps-action {
        margin-top: 24px;
      }
    
            `
        ]
    })
export class TestPageComponent  {

    current = 0;

    index = 'First-content';
  
    pre() {
      this.current -= 1;
      this.changeContent();
    }
  
    next() {
      this.current += 1;
      this.changeContent();
    }
  
    done() {
      this._message.success('done');
    }
  
    changeContent() {
      switch (this.current) {
        case 0: {
          this.index = 'First-content';
          break;
        }
        case 1: {
          this.index = 'Second-content';
          break;
        }
        case 2: {
          this.index = 'third-content';
          break;
        }
        default: {
          this.index = 'error';
        }
      }
    }
  
    constructor(private _message: NzMessageService) {
    }

}
