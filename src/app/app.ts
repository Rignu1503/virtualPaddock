import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Lading } from "./lading/lading.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Lading],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{

   ngOnInit(): void {
    initFlowbite();
  }

  protected readonly title = signal('virtualPaddock');
}
