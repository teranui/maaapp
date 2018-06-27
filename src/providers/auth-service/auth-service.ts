import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://groupe1.api/api/';

@Injectable()
export class AuthService {

  constructor(public http: Http) {}

  login(credentials) {
    console.log('login credentials',credentials);
    return new Promise((resolve, reject) => {
      let headers = new Headers();    
      headers.append('Content-Type', 'application/json');

      console.log('login headers',headers);
      console.log('login credentials',credentials);
        this.http.post(apiUrl+'login', credentials)
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            console.log('erreur authentification', err);
            reject(err);
          });
    });
  }

  logout(){
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('X-Auth-Token', localStorage.getItem('token'));
        this.http.post(apiUrl+'logout', {}, {headers: headers})
          .subscribe(res => {
            localStorage.clear();
          }, (err) => {
            reject(err);
          });
    });
  }
}