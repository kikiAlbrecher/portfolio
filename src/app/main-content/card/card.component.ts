import { Component } from '@angular/core';
import { LenormandCard } from '../../models/card.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
// combineMeanings(cardA: LenormandCard, cardB: LenormandCard): string {
//   return `${cardA.name} + ${cardB.name}: ${this.generateCombinationText(cardA, cardB)}`;
// }

// const response = await openai.createCompletion({
//   model: "gpt-4o-mini",
//   prompt: `Kombiniere die Bedeutung von ${cardA.name} (${cardA.keywords}) und ${cardB.name} (${cardB.keywords}) im Lenormand-Kontext.`,
// });
}
