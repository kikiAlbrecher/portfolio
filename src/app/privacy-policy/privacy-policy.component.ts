import { AfterViewInit, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimationDirective } from '../shared/scroll-animation.directive';
import { ScrollTopService } from '../shared/scroll-top.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule, ScrollAnimationDirective],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss', '../imprint/imprint.component.scss']
})
export class PrivacyPolicyComponent implements AfterViewInit {
  constructor(private scrollService: ScrollTopService) { }

  ngAfterViewInit(): void {
    this.scrollService.scrollToTop('auto');
  }
}