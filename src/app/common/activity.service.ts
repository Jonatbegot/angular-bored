import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Http client service for Bored API:
 * https://www.boredapi.com/documentation
 * @export ActivityService
 * @class ActivityService
 */
@Injectable({
  providedIn: 'root'
})

export class ActivityService {

  constructor(private http: HttpClient) { }

  /**
   * Get random activity
   */
  getRandom(): Observable<any> {
    return this.http.get<any>('/api/activity');
  }
}
