import { Component } from '@angular/core';
import { LenormandCard } from '../../models/card.model';
import { CommonModule } from '@angular/common';
import { CardSlotComponent } from '../card-slot/card-slot.component';

@Component({
  selector: 'app-grand-tableau',
  standalone: true,
  imports: [CommonModule, CardSlotComponent],
  templateUrl: './grand-tableau.component.html',
  styleUrl: './grand-tableau.component.scss'
})
export class GrandTableauComponent {
  slots = Array.from({ length: 36 });
  cards: (LenormandCard | null)[] = Array(36).fill(null);

  assignCard(card: LenormandCard, index: number) {
    this.cards[index] = card;
  }
}