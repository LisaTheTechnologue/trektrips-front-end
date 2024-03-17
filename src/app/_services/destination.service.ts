import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Destination } from '../_models/destination.model';

const API_URL = 'http://localhost:8080/api/destinations';
const httpOptions = {
  headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Destination[]> {
    // return this.http.get<Destination[]>(API_URL);
    return this.http.get<Destination[]>(API_URL+"/all");
  // .pipe(
  //   catchError(this.handleError)
  // );
  }
  get(id: any): Observable<Destination> {
    return this.http.get<Destination>('${API_URL}/${id}');
  }

  create(data: any): Observable<any> {
    return this.http.post(API_URL+"/create", data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put('${API_URL}/${id}', data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete('${API_URL}/${id}');
  }

  deleteAll(): Observable<any> {
    return this.http.delete(API_URL);
  }

  findByCity(title: any): Observable<Destination[]> {
    return this.http.get<Destination[]>('${API_URL}?city=${city}');
  }
}

