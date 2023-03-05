import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private readonly API_VERSION: string  = 'v1';

constructor(private http: HttpClient) { }

public get<T>(baseURL: string, endPoint: string): Observable<T> {
  return this.http.get<T>(`${baseURL}/${this.API_VERSION}/${endPoint}`);
}

public post<T>(baseURL: string, endPoint: string, data: any | null): Observable<T> {
  return this.http.post<T>(`${baseURL}/${this.API_VERSION}/${endPoint}`, data);
}

public put<T>(baseURL: string, endPoint: string, data: any | null): Observable<T> {
  return this.http.put<T>(`${baseURL}/${this.API_VERSION}/${endPoint}`, data);
}

public patch<T>(baseURL: string, endPoint: string, data: any | null): Observable<T> {
  return this.http.patch<T>(`${baseURL}/${this.API_VERSION}/${endPoint}`, data);
}

public delete<T>(baseURL: string, endPoint: string): Observable<T> {
  return this.http.delete<T>(`${baseURL}/${this.API_VERSION}/${endPoint}`);
}

public getByUrl<T>(url: string): Observable<T> {
  return this.http.get<T>(url);
}

}
