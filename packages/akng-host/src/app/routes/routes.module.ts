import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { RouteRoutingModule } from './routes-routing.module';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { UserLockComponent } from './passport/lock/lock.component';
import { Exception403Component } from './exception/403.component';
import { Exception4041Component } from './exception/4041.component';
import { Exception500Component } from './exception/500.component';
import { Exception600Component } from './exception/600.component';

import {TestPageComponent} from './testpage/testpage.component'
import {HostinfoComponent} from './testpage/hostinfo/hostinfo.component'
import {Step1Component} from './testpage/step1/step1.component'
import {TodolistComponent} from './todolist/todolist.component'
import {CodepgaeComponent} from './exception/codepage.component'
import {lifecycleComponent} from './lifecycle/lifecycle.component'

import {TestTableComponent} from './testtable/testtable.component'



import {SonComponent}  from './lifecycle/son/son.component'
import {LogService,  LogService2 } from './lifecycle/son/log.service'

import {TodolistService} from './todolist/todolist.service'

@NgModule({
    imports: [ SharedModule, RouteRoutingModule ],
    providers:[
        LogService   , 
        LogService2
       // TodolistService
    ],
    declarations: [
        DashboardComponent,
        // passport pages
        UserLoginComponent,
        UserRegisterComponent,
        UserRegisterResultComponent,
        // single pages
        CallbackComponent,
        UserLockComponent,
        Exception403Component,
        Exception4041Component,
        Exception500Component,
        Exception600Component,
        TestPageComponent,
        HostinfoComponent,
        Step1Component,
        TodolistComponent,
        CodepgaeComponent,
        lifecycleComponent,
        SonComponent,
        TestTableComponent
       // LogService
    ]
})
export class RoutesModule {}
