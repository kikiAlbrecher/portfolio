import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MediaLinksComponent } from '../../media-links/media-links.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule, MediaLinksComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss', './hero-continued.component.scss']
})
export class HeroComponent { }