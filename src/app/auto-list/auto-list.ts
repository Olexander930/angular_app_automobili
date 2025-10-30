import { Component } from '@angular/core';
import { Automobil } from '../core/models/car.model';
import { CommonModule } from '@angular/common';
import { AutoCard } from '../auto-card/auto-card';
import { FormsModule } from '@angular/forms';
import { DataService } from '../core/services/data';
@Component({
  selector: 'app-auto-list',
  standalone: true,
  imports: [CommonModule, AutoCard, FormsModule],
  templateUrl: './auto-list.html',
  styleUrls: ['./auto-list.css']
})
export class AutoList {
  searchText: string = '';
  filteredCars: Automobil[] = [];
  cars: Automobil[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.cars = this.dataService.getCars();
    this.filteredCars = [...this.cars];
  }

  searchCars() {
    const text = this.searchText.toLowerCase().trim();
    if (!text) {
      this.filteredCars = this.cars;
      return;
    }
    const token = text.split(/\s+/);
    this.filteredCars = this.cars.filter(car =>{
      const combined = (car.brand + ' ' + car.model).toLowerCase();
      return token.every(token => combined.includes(token));
    }
    );
  }
  onCarSelected(selectedCar: Automobil) {
    console.log('Вибраний автомобіль:', selectedCar);
  }
}
