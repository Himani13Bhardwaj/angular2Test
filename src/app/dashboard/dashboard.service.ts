import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DashboardService {
  options: any;

  /**
   * init
   * @param http
   */
  constructor(
    private http: Http
  ) { 
    let headers;
    headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({ headers: headers });
  }

  addNewEmployee(url, body): Observable<any> {
    return this.http.post(url, body, this.options).map((res: Response) => {
      if (res.status === 200) {
        return res.json();
      }
      return res;
    })
    .catch(this.handleError);
  }

  /**
   * error
   * @param error
   */
  private handleError(error: any) {
    let that;
    that = this;
    return Observable.throw(error.json().error || 'Server error');
  }

}
