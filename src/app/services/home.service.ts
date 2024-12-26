import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private apiBaseUrl = 'http://localhost:3000/api'; // Cambia esta URL a la de tu backend

  constructor(private http: HttpClient) {}

  /**
   * Obtiene los retos destacados desde el backend.
   */
  getChallenges(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}/challenges`);
  }

  /**
   * Obtiene los usuarios destacados desde el backend.
   */
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}/users`);
  }
}
