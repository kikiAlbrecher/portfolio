import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss', '../privacy-policy/privacy-policy.component.scss']
})
export class ImprintComponent {

}
