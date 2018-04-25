import {Component, OnInit} from '@angular/core';

@Component(
    {
        selector: 'host-info',
        templateUrl: './hostinfo.component.html'
        
    })
export class HostinfoComponent {
     Vm : IHostInfoData  = {
        os:"CentOS 6.5 64bit",
        isPyth:"是",
        hostKind:"性能型",
        cpu:"1 核",
        momery:"1 G",
        gpu:"0",
        sysDist:"20 GB",
        copyStategy:"同数据中心多副本",
        name:"",
        hostName : "",
        count:1,
        hourCost:"¥0.10",
        
        monthCost:"72.00"
         
     }
}



export interface IHostInfoData
{
    os :string  ,   //="CentOS 6.5 64bit",
    isPyth:string ,//="是",
    hostKind:string , //="性能型",
    cpu:string , // ="1 核",
    momery:string , //="1 G",
    gpu:string , //="0",
    sysDist:string , //="20 GB",
    copyStategy:string , //="同数据中心多副本",
    name :string , //="",
    hostName :string , //= "",
    count :number , //=1,
    hourCost :string , //="¥0.10",
    
    monthCost:string  //="72.00"
}