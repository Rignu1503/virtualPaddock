import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";


@Component({
  selector: 'app-lading',
  imports: [ HeroComponent],
  templateUrl: './lading.component.html',
})
export class LadingPage { }
