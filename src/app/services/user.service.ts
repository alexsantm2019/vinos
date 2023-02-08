import { Injectable, Optional, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserStoreService } from './user-store.service';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:3000/api/';

  constructor(private http: HttpClient, private userStore: UserStoreService,) {  }
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.url + 'user/login', {
      username: username,
      password: password
    }).pipe(map((resp: any) => {
      this.userStore.token = resp.token;
      return resp;
    }));
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(this.url + 'user/register', {
      username: username,
      password: password
    });
  }
}