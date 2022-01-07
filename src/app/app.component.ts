import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RevisedFrontEnd';

  constructor(private http: HttpClient) {
    this.http.get('server/api/v1/Guest').pipe(
      tap(data => console.log(data))
    )
  }
}
