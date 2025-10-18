import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LenormandCard } from '../../models/card.model';
import { CommonModule } from '@angular/common';
import { CardPickerComponent } from '../card-picker/card-picker.component';

@Component({
  selector: 'app-card-slot',
  standalone: true,
  imports: [CommonModule, CardPickerComponent],
  templateUrl: './card-slot.component.html',
  styleUrl: './card-slot.component.scss'
})
export class CardSlotComponent {
  @Input() card: LenormandCard | null = null;
  @Input() slotIndex!: number;
  @Output() cardSelected = new EventEmitter<LenormandCard>();

  onCardChosen(card: LenormandCard) {
    this.cardSelected.emit(card);
  }
}
