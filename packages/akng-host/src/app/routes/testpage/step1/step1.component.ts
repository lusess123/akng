import {Component, OnInit} from '@angular/core';
import { SimpleTableColumn } from '@delon/abc';

@Component(
    {
        selector: 'step1',
        templateUrl: './step1.component.html'
        
    })
export class Step1Component {
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id.value' },
        { title: '头像', type: 'img', width: '50px', index: 'picture.thumbnail' },
        { title: '邮箱', index: 'email' },
        { title: '电话', index: 'phone' },
        { title: '注册时间', type: 'date', index: 'registered' }
    ];
}