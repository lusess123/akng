import { Input,Component,OnInit } from "@angular/core";
import { LogService} from "./log.service"

@Component({
    selector: 'son',
    template: '<div>{{name}}</div>',
   
  })
  export class SonComponent implements OnInit {
    @Input() name:string;
    constructor(private LogService:LogService) { }

    log(msg:string){
          this.LogService.addLog({
              Text:msg,
              Time:new Date()
          });
    }
  
    ngOnInit() {
      this.log("子组件ngOninit");
    }
    ngOnChanges (){
      this.log("子组件ngonchanges");
    }
    ngDoCheck (){
      this.log("子组件ngDocheck")
    }
    ngAfterContentInit(){
      this.log("子组件ngAfterContentInit")
    } 
    ngAfterContentChecked(){
      this.log("子组件ngAfterContentChecked")
    }
    ngAfterViewInit(){
      this.log("子组件ngAfterViewInit")
    }
    ngAfterViewChecked(){
      this.log("子组件ngAfterViewChecked")
    }
    
  }