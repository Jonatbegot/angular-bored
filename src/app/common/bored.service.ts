import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Http client service for Bored API:
 * https://www.boredapi.com/documentation
 */
@Injectable({
  providedIn: 'root'
})
export class BoredService {

  constructor(private http: HttpClient) { }

  /**
   * Get random activity
   */
  getRandom(): Observable<any> {

    return this.http.get<any>('/api/activity');
  }
}
