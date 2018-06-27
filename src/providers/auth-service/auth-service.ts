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
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');

      console.log('login headers',headers);
      console.log('login credentials',credentials);
        // this.http.post(apiUrl+'login', JSON.stringify(credentials))
        // .map(res=>res.json())
        //   .subscribe(res => {
        //     resolve(res.json());
        //   }, (err) => {
        //     console.log('login err', err);
        //     reject(err);
        //   });

        this.http.post(apiUrl+'login', JSON.stringify(credentials))
          .map(res => res.json())
          .subscribe(
            (data) => {
              console.log('Information du traiteur: ', data);
            },
            (err) => {
              console.log('Erreur authentification', err);
            }
          )
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