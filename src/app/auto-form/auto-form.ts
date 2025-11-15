import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../core/services/data';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-auto-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './auto-form.html',
  styleUrls: ['./auto-form.css']
})
export class AutoFormComponent {
  carForm: FormGroup;

  constructor(private dataService: DataService, private router: Router) {
    this.carForm = new FormGroup({
      brand: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      year: new FormControl('', [Validators.required, Validators.min(1990)]),
      price: new FormControl('', [Validators.required, Validators.min(1000)]),
      color: new FormControl('', Validators.required),
      engine: new FormControl('', Validators.required),
      transmission: new FormControl('', Validators.required),
      fuelConsumption: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    if (this.carForm.valid) {
      this.dataService.addCar(this.carForm.value).subscribe({
        next: () => {
          alert('Автомобіль успішно додано!');
          this.router.navigate(['/cars']);
        },
        error: (err) => {
          console.error('Помилка POST:', err);
          alert('Сталася помилка при додаванні авто');
        }
      });
    } else {
      this.carForm.markAllAsTouched();
    }
  }
}

