
import { Component } from '@angular/core';

@Component({
    selector: 'exception-codepage',
    template: `<exception type="404" style="min-height: 500px; height: 80%;"></exception>`
})
export class CodepgaeComponent {
    ngOnInit() {
        alert("code page 22");
    }
}