import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { LenormandCard } from '../../models/card.model';
import cardsData from '../../../assets/cards.json';

@Component({
  selector: 'app-card-picker',
  standalone: true,
  imports: [CommonModule, FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule
  ],
  templateUrl: './card-picker.component.html',
  styleUrls: ['./card-picker.component.scss']
})
export class CardPickerComponent implements OnChanges {
  @Output() cardChosen = new EventEmitter<LenormandCard>();

  cards: LenormandCard[] = cardsData;
  query = '';
  filteredCards: LenormandCard[] = this.cards;

  ngOnChanges(changes: SimpleChanges): void {
    this.filterCards();
  }

  filterCards() {
    const q = this.query.toLowerCase();
    
    this.filteredCards = this.cards.filter(c =>
      c.name.toLowerCase().includes(q) || c.id.toString().startsWith(q)
    );
  }

  selectCard(event: MatAutocompleteSelectedEvent) {
    const card = event.option.value as LenormandCard;
    this.cardChosen.emit(card);
    this.query = '';
  }
}
