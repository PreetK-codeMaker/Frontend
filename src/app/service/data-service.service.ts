import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getCli() {
    return this.http.get('/server/api/v1/Guest').pipe(
      tap(data => console.log(data))
    )
  }
}
