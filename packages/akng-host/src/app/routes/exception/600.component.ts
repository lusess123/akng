import { Component } from '@angular/core';

@Component({
    selector: 'exception-600',
    template: `<exception type="500" style="min-height: 500px; height: 80%;"></exception>`
})
export class Exception600Component {
    ngOnInit() {
        alert("600");
    }

}
