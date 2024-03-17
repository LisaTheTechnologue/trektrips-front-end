import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../_models/post.model';

const API_URL = 'http://localhost:8080/api/posts';
const httpOptions = {
  headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(API_URL+"/all");
  }
  getAllPublished(): Observable<Post[]> {
    return this.http.get<Post[]>(API_URL+"/");
  }
  get(id: any): Observable<Post> {
    return this.http.get<Post>('${API_URL}/${id}');
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

  findByTitle(title: any): Observable<Post[]> {
    return this.http.get<Post[]>('${API_URL}?title=${title}');
  }
}

