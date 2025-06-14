import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReferenceItemComponent } from './reference-item/reference-item.component';
import { ScrollAnimationDirective } from '../../shared/scroll-animation.directive';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReferenceItemComponent, ScrollAnimationDirective],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  currentIndex = 0;
  showReference = true;

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
    }
  ];

  nextReference() {
    this.showReference = false;

    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.references.length;
      this.showReference = true;
    }, 0);
  }

  prevReference() {
    this.showReference = false;

    setTimeout(() => {
      this.currentIndex =
        (this.currentIndex - 1 + this.references.length) % this.references.length;
      this.showReference = true;
    }, 0);
  }
}
