import { Injectable } from '@angular/core';
import { Automobil } from '../models/car.model';
import { Observable, BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cars: Automobil[] = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Camry',
      year: 2021,
      engine: '2.5L',
      transmission: 'Automatic',
      fuelConsumption: '7.5 L/100km',
      color: 'White',
      price: 35000,
      imageUrl:'assets/tayotacamry.png',
      isAvailable: true
    },
    {
      id: 2,
      brand: 'BMW',
      model: 'X5',
      year: 2022,
      engine: '3.0L',
      transmission: 'Automatic',
      fuelConsumption: '9.5 L/100km',
      color: 'White',
      price: 65000,
      imageUrl:'assets/images/bmw-x5.jpg',
      isAvailable: false,
      discountPrice: 62000
    },
    {
      id: 3,
      brand: 'Mercedes-Benz',
      model: 'C-Class',
      year: 2023,
      engine: '2.0L',
      transmission: 'Mechanics',
      fuelConsumption: '7.2 L/100km',
      color: 'gray',
      price: 45000,
      imageUrl:'assets/images/mercedes-benz.jpg',
      isAvailable: true,
      discountPrice: 42000
    },
    {
      id: 4,
      brand: 'Audi',
      model: 'S7',
      year: 2025,
      engine: '2.0L',
      transmission: 'Automatic',
      fuelConsumption: '8.1 L/100km',
      color: 'gray',
      price: 86995,
      imageUrl:'assets/images/Audi.jpg',
      isAvailable: true,
    }
  ];
  private carsSubject = new BehaviorSubject<Automobil[]>(this.cars);
  cars$ = this.carsSubject.asObservable();
  constructor() {}

  getCars(): Observable <Automobil[]> {
    return of(this.cars);
  }
  filterCars(searchTerm: string): void {
    const term = searchTerm.toLowerCase().trim();
    if (!term) {
      this.carsSubject.next(this.cars);
      return;
    }
    const tokens = term.split(/\s+/);

    const filtered = this.cars.filter(car =>{
      const combined = (car.brand + ' ' + car.model).toLowerCase();
        return tokens.every(t => combined.includes(t));
    });
    this.carsSubject.next(filtered);
  }
  resetFilter(): void {
    this.carsSubject.next(this.cars);
  }
}
