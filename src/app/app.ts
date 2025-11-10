import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutoList } from './auto-list/auto-list';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AutoList, Footer, Header],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('my-angular-project');
}
