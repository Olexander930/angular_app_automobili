import { Component, OnInit, OnDestroy } from '@angular/core';
import { Automobil } from '../core/models/car.model';
import { CommonModule } from '@angular/common';
import { AutoCard } from '../auto-card/auto-card';
import { FormsModule } from '@angular/forms';
import { DataService } from '../core/services/data';
import { Subscription, Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auto-list',
  standalone: true,
  imports: [CommonModule, AutoCard, FormsModule, RouterModule],
  templateUrl: './auto-list.html',
  styleUrls: ['./auto-list.css']
})
export class AutoList implements OnInit, OnDestroy {

  searchText: string = '';
  cars: Automobil[] = [];       // Усі машини з API
  filteredCars: Automobil[] = []; // Машини після пошуку

  private subscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscription = this.dataService.getCars().subscribe({
      next: (data) => {
        this.cars = data;
        this.filteredCars = data; // початково показуємо всі машини
      },
      error: (err) => console.error('Помилка при завантаженні машин:', err)
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  searchCars(): void {
    const term = this.searchText.toLowerCase().trim();
    if (!term) {
      this.filteredCars = this.cars;
      return;
    }

    this.filteredCars = this.cars.filter(car =>
      (car.brand + ' ' + car.model).toLowerCase().includes(term)
    );
  }

  clearSearch(): void {
    this.searchText = '';
    this.filteredCars = this.cars;
  }

  onCarSelected(selectedCar: Automobil) {
    console.log('Вибраний автомобіль:', selectedCar);
  }
}
