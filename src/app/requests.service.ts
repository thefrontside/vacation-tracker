import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Request {
  owner: String = '';
  status: String = '';
  startDate: Date = null;
  endDate: Date = null;

  constructor({ owner, status, startDate, endDate}) {
    this.owner = owner;
    this.status = status;
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
  }
}

interface RequestPayload {
  requests: Request[];
}

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  API_URL = '/api';

  constructor(private http: HttpClient) { }

  getRequests(): Observable<Request[]> {
    return this.http.get(`${this.API_URL}/requests`)
      .pipe(
        map((data: RequestPayload) => data.requests.map(d => new Request(d)))
      );
  }
}
