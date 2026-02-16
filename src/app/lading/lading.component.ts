import { Component } from '@angular/core';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";


@Component({
  selector: 'app-lading',
  imports: [NavbarComponent, HeroComponent],
  templateUrl: './lading.component.html',
})
export class Lading { }
