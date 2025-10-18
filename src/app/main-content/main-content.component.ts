import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GrandTableauComponent } from './grand-tableau/grand-tableau.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, GrandTableauComponent], 
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent { }