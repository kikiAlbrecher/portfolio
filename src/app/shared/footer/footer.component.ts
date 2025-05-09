import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MediaLinksComponent } from '../../media-links/media-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, MediaLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent { }