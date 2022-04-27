import { Injectable } from '@angular/core';
import { of } from "rxjs";

export type User = {
  ID: string,
  EMAIl: string
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _currentUser: User = {ID: "test", EMAIl: "test@jitsu.com"}

  get currentUser() {
    return of(this._currentUser)
  }

  constructor() { }
}
