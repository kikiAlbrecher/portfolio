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
  isMenuClosed = true;
  isAnimating = false;
  iconState: 'menu' | 'menu-transition' | 'close-transition' | 'close' = 'menu';

  constructor(public translate: TranslateService) { }

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

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}