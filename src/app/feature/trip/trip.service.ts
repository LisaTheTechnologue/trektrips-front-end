import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../../_models/trip.model';

const API_URL = 'http://localhost:8080/api/trips';
const httpOptions = {
  headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root',
})
export class TripService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Trip[]> {
    return this.http.get<Trip[]>(API_URL+"/full-access");
  }
  getAllPublished(): Observable<Trip[]> {
    return this.http.get<Trip[]>(API_URL+"/");
  }
  get(id: any): Observable<Trip> {
    return this.http.get<Trip>('${API_URL}/${id}');
  }

  create(data: any): Observable<any> {
    return this.http.post(API_URL+"/create", data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put('${API_URL}/${id}', data, httpOptions);
  }

  delete(id: any): Observable<any> {
    return this.http.delete('${API_URL}/${id}');
  }

  deleteAll(): Observable<any> {
    return this.http.delete(API_URL);
  }

  findByTitle(title: any): Observable<Trip[]> {
    return this.http.get<Trip[]>('${API_URL}?title=${title}');
  }
}

