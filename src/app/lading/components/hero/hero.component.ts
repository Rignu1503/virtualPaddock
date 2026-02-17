import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InfiteSlider } from "../../../shared/infite-slider/infite-slider.component";

@Component({
  selector: 'app-hero',
  imports: [InfiteSlider],
  templateUrl: './hero.component.html',

})
export class HeroComponent { }
