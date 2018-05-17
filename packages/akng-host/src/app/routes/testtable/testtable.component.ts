import { Component } from '@angular/core';
import { SimpleTableColumn, SimpleTableChange, SimpleTableFilter } from '@delon/abc/src/simple-table';

@Component({
   
    template: `
    <simple-table #st [data]="users" [ps]="3" [columns]="columns">
    <ng-template #expand let-item let-index="index" let-column="column">
            {{ item.age }}
        </ng-template>
        <ng-template st-row="custom" type="title" let-c>
            {{ c.title }}
            <nz-dropdown nzTrigger="click" [nzClickHide]="false">
                <i class="anticon anticon-smile-o ant-table-filter-icon" nz-dropdown></i>
                <div class="ant-table-filter-dropdown p-sm">
                    <input type="text" nz-input placeholder="Search name" [(ngModel)]="searchValue" class="width-sm mr-sm">
                    <button nz-button [nzType]="'primary'" (click)="st.load(2)">Search</button>
                </div>
            </nz-dropdown>
        </ng-template>
        <ng-template st-row="custom" let-item let-index="index">
          <Button (click)='clickTd(item)'>{{item.age}}</Button>
            <nz-tooltip [nzTitle]="'年龄：' + item.age">
                <span nz-tooltip>tooltip: {{item.age}}-{{index}}</span>
            </nz-tooltip>
        </ng-template>
    </simple-table>
    `
})
export class TestTableComponent {

    searchValue: string;

    clickTd(item:any){
       item.expand = !(item.expand);
    }

    users: any[] = Array(10).fill({}).map((item: any, idx: number) => {
        return {
            id: idx + 1,
            name: `name ${idx + 1}`,
            age: Math.ceil(Math.random() * 10) + 20
        };
    });
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id' },
        { title: '姓名', index: 'name' },
        { title: '年龄', index: 'age' },
        {
            title: '自定义',
            render: 'custom'
        }
    ];
}