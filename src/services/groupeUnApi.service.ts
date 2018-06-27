// Core components
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class groupeUnApiService {

    private baseUrl: string = 'http://groupe1.api/api/';


    constructor(private http: Http) {
    }

    public addPlate(data) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Authorization', 'Bearer'+ localStorage.getItem('token'));
            headers.append('Accept', localStorage.getItem('token'));
                this.http.post(this.baseUrl + '/users', JSON.stringify(data))
                    .subscribe(res => {
                        resolve(res);
                    }, (err) => {
                        reject(err);
                    });
        });
    }

}