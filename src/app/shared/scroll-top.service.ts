import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollTopService {
  constructor(@Inject(DOCUMENT) private document: Document) { }

  scrollToTop(behavior: ScrollBehavior = 'auto'): void {
    this.document.defaultView?.scrollTo({ top: -110.33, behavior });
  }
}