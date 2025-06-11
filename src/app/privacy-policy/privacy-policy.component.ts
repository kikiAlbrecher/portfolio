import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimationDirective } from '../shared/scroll-animation.directive';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule, ScrollAnimationDirective],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss', '../imprint/imprint.component.scss']
})
export class PrivacyPolicyComponent { }
