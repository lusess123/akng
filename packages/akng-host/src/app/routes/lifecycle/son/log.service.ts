import {Component,Injectable} from '@angular/core';
import { ILog } from './../lifecycle.component'

@Injectable()
export class LogService {

  _logs : ILog[] = [];

  get Logs() {
    return this._logs;
  }

  addLog(log : ILog) {
    this
      ._logs
      .push(log);
  }
  clear() {
    this._logs = [];
  }
}


@Injectable()
export class LogService2 {

  _logs : ILog[] = [];

  get Logs() {
    return this._logs;
  }

  addLog(log : ILog) {
    this
      ._logs
      .push(log);
  }
  clear() {
    this._logs = [];
  }
}