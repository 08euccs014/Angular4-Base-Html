/**
 * Http utility
 * 
 * @author Mohit Agrawal<Mohit.Agrawal@mi-xlab.com>
 * @copyright Motherson Invenzen X-Lab Pvt.Ltd. 2017
 */

import {Injectable} from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams} from '@angular/http';
import { environment as Environment } from '../../environments/environment';
import { AuthService } from '../auth.service'
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HttpUtil 
{
    constructor(private _http: Http, private _authService: AuthService) {}

    get(api_path: string, req_params: any):any 
    { 
        return this.request('GET', api_path, req_params);
    }

    post(api_path: string, req_params: any):any 
    { 
        return this.request('POST', api_path, req_params);
    }

    put(api_path: string, req_params: any):any 
    { 
        return this.request('PUT', api_path, req_params);
    }

    delete(api_path: string, req_params: any):any 
    { 
        return this.request('DELETE', api_path, req_params);
    }

    request(method: string, api_path: string, req_params: any) : any 
    {
        let param = new URLSearchParams();

        for(let key in req_params) {
            param.append(key, req_params[key]);
        }
        
        let headers = new Headers({ 
            'Content-Type': 'application/json',
            'Authorization' : this._authService.getToken()
        });

        let options = new RequestOptions(
        {
            "method" : method,
            "headers" : headers,
            "search" : param
        });

        let api_url = Environment.api_server+api_path;

        return this._http.request(api_url, options)
            .toPromise()
            .then(response => response.json())
            .then(res => 
            {
                if(res.code == '200') 
                {
                    return res.data;
                }

                throw new Error(res.message);
            }).catch(error => 
            {
                throw new Error(error.message);
            })
    }
}