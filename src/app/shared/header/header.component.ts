import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentLang = 'en';
  isMenuClosed = true;
  isAnimating = false;

  iconState: 'menu' | 'menu-transition' | 'close-transition' | 'close' = 'menu';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLang);
    this.translate.use(this.currentLang);
  }

  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
  }

  toggleMenu(): void {
    if (this.isAnimating) return;

    this.isAnimating = true;

    this.isMenuClosed ? this.openMenu() : this.closeMenu();
  }

  openMenu(): void {
    this.iconState = 'menu-transition';

    setTimeout(() => {
      this.iconState = 'close';
      this.isMenuClosed = false;
      this.isAnimating = false;
    }, 125);
  }

  closeMenu(): void {
    this.iconState = 'close-transition';

    setTimeout(() => {
      this.iconState = 'menu';
      this.isMenuClosed = true;
      this.isAnimating = false;
    }, 125);
  }
}