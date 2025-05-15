import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reference-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reference-item.component.html',
  styleUrl: './reference-item.component.scss'
})
export class ReferenceItemComponent {
  @Input() citation!: string;
  @Input() recommender!: string;
  @Input() role!: string;
  @Input() imageUrl!: string;
}
