import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurantes-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurantes-favoritos.component.html',
  styleUrls: ['./restaurantes-favoritos.component.scss']
})
export class RestaurantesFavoritosComponent {
  favCon = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
