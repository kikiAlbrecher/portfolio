import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MediaLinksComponent } from '../../media-links/media-links.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule, MediaLinksComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss', 
})
export class HeroComponent {

}
