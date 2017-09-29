import { Injectable } from '@angular/core';


@Injectable()
export class UserData {
  private _isAuthenticated : boolean = false;

  constructor() { }

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
  }
}
