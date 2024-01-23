import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComoFuncionaComponent } from "./como-funciona/como-funciona.component";
import { TestimonialesComponent } from "./testimoniales/testimoniales.component";
import { RestaurantesFavoritosComponent } from "./restaurantes-favoritos/restaurantes-favoritos.component";
import { RepartidoresComponent } from "./repartidores/repartidores.component";
import { MyStoreComponent } from "./my-store/my-store.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    imports: [CommonModule, ComoFuncionaComponent, TestimonialesComponent, RestaurantesFavoritosComponent, RepartidoresComponent, MyStoreComponent]
})
export class LandingPageComponent {

}
