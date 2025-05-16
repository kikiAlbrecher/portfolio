import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MediaLinksComponent } from '../../media-links/media-links.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule, MediaLinksComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {

}
