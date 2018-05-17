import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
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

import { TestPageComponent } from './testpage/testpage.component'
import { HostinfoComponent} from './testpage/hostinfo/hostinfo.component'
import {TodolistComponent} from './todolist/todolist.component'
import {CodepgaeComponent} from './exception/codepage.component'
import {lifecycleComponent} from './lifecycle/lifecycle.component'

import {TestTableComponent} from './testtable/testtable.component'

const routes: Routes = [
    {
        path: '',
        component: LayoutDefaultComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent, data: { title: '仪表盘' } },
            { path:"codepage",component:CodepgaeComponent},
            { path: '500', component: Exception500Component },
            { path: '404', component: Exception4041Component },
            { path: '600', component: Exception600Component },
            { path:'testpage',component:TestPageComponent},
            { path:"todolist",component:TodolistComponent},
            {path:"testtable",component:TestTableComponent},
            {path:"lifecycle",component:lifecycleComponent}
            // 业务子模块
            // { path: 'widgets', loadChildren: './widgets/widgets.module#WidgetsModule' }
        ]
    },
    // 全屏布局
    // {
    //     path: 'fullscreen',
    //     component: LayoutFullScreenComponent,
    //     children: [
    //     ]
    // },
    // passport
    {
        path: 'passport',
        component: LayoutPassportComponent,
        children: [
            { path: 'login', component: UserLoginComponent },
            { path: 'register', component: UserRegisterComponent },
            { path: 'register-result', component: UserRegisterResultComponent }
        ]
    },
    // 单页不包裹Layout
    { path: 'callback/:type', component: CallbackComponent },
    { path: 'lock', component: UserLockComponent, data: { title: '锁屏', titleI18n: 'lock' } },
    { path: '403', component: Exception403Component },
   // { path: '404', component: Exception404Component },
   // { path:"codepage",component:CodepgaeComponent},
    { path: '500', component: Exception500Component },
    { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class RouteRoutingModule { }
