import { Component } from '@angular/core';
import { Automobil } from '../core/models/car.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-auto-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auto-list.html',
  styleUrls: ['./auto-list.css']
})
export class AutoList {
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
    }
  ];
}
