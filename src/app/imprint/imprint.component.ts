import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimationDirective } from '../shared/scroll-animation.directive';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule, ScrollAnimationDirective],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss', '../privacy-policy/privacy-policy.component.scss']
})
export class ImprintComponent {

}
