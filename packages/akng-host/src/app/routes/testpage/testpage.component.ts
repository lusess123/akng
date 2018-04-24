import {Component, OnInit} from '@angular/core';
import {_HttpClient} from '@delon/theme';

@Component({selector: 'app-testpage', templateUrl: './testpage.component.html'})
export class TestPageComponent implements OnInit {

    constructor(private http : _HttpClient) {}

    ngOnInit() {}

}
