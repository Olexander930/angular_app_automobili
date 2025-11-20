import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Automobil } from '../models/car.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl ='http://localhost:3000/cars';

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Невідома помилка';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Помилка клієнта: ${error.error.message}`;
    } else {
      errorMessage = `Помилка сервера (${error.status}): ${error.message}`;
    }

    console.error('HTTP Error:', errorMessage);
    return throwError(() => errorMessage);
  }

  getCars(): Observable<Automobil[]> {
    return this.http.get<Automobil[]>(this.baseUrl).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getCarById(id: number): Observable<Automobil> {
    return this.http.get<Automobil>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  addCar(newCar: Automobil): Observable<Automobil> {
    return this.http.post<Automobil>(this.baseUrl, newCar).pipe(
      catchError(this.handleError.bind(this))
    );
  }
}

