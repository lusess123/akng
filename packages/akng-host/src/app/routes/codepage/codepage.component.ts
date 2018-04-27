import {Component} from '@angular/core';

@Component(
    {
        selector: 'codepage', 
        template: `
          
           <h6>代码生成</h6>
         
           <div style="margin-bottom: 2rem;">  
           <input nz-input placeholder="请输入组件名"   (input)="aaa($event)"   /></div>
           <div >
           <textarea row="400" nz-input [(ngModel)]="Code"   nzAutosize  ></textarea>
           </div>
        `})
export class CodepgaeComponent {

    value : string;
    Code :string ;
    aaa(e){
          //console.log(e.target.value);
          this.Code =  _codeCreate(  e.target.value);
    }
}


export const _codeCreate = (regName? :string) =>
{
return `//import {${regName}Component} from './${regName}/${regName}.component'

import {Component} from '@angular/core';
@Component(
 {
   selector: '${regName}', 
   template: \`
  
   <h6>${regName}</h6>
   
\`
  })
export class ${regName}Component {}

    `;
}

