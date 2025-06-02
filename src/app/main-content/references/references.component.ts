import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReferenceItemComponent } from './reference-item/reference-item.component';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReferenceItemComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  currentIndex = 0;

  references = [
    {
      citation: 'REFERENCES.CITATION_BASTIAN',
      recommender: 'REFERENCES.RECOMMENDER_BASTIAN',
      role: 'REFERENCES.TEAM_PARTNER',
      imageUrl: 'assets/img/Geppert.JPEG',
    },
    {
      citation: 'REFERENCES.CITATION_GEORGE',
      recommender: 'REFERENCES.RECOMMENDER_GEORGE',
      role: 'REFERENCES.TEAM_PARTNER',
      imageUrl: 'assets/img/Cubas.jpg',
    },
    // {
    //   citation: 'REFERENCES.CITATION_PIA',
    //   recommender: 'REFERENCES.RECOMMENDER_PIA',
    //   role: 'REFERENCES.TEAM_PARTNER',
    //   imageUrl: 'assets/img/Pia.png',
    // }
  ];

  nextReference() {
    this.currentIndex = (this.currentIndex + 1) % this.references.length;
  }

  prevReference() {
    this.currentIndex = (this.currentIndex - 1 + this.references.length) % this.references.length;
  }
}
