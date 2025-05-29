import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ContactFormItemComponent } from './contact-form-item/contact-form-item.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, ContactFormItemComponent, RouterModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  http = inject(HttpClient);
  submitAttempted = false;
  successMessage = '';
  errorMessage = '';
  showMessage = false;

  @ViewChild('messageTextarea', { static: true }) messageTextarea!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('nameItem') nameItem!: ContactFormItemComponent;
  @ViewChild('emailItem') emailItem!: ContactFormItemComponent;
  // @ViewChild('message') message!: NgModel;
  // @ViewChild('policy') policy!: NgModel;

  contactData = {
    name: '',
    email: '',
    message: '',
    policyAccepted: false
  };

  post = {
    endPoint: 'https://christina-albrecher.at/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
      },
      responseType: 'text' as const
    },
  };

  private showTemporaryMessage(type: 'success' | 'error', message: string) {
    this.successMessage = type === 'success' ? message : '';
    this.errorMessage = type === 'error' ? message : '';
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
      setTimeout(() => {
        this.successMessage = '';
        this.errorMessage = '';
      }, 250);
    }, 2500);
  }

  onClickSubmit(ngForm: NgForm) {
    this.submitAttempted = true;

    if (!ngForm.valid) {
      Object.values(ngForm.controls).forEach(control => control.markAsTouched());
      this.markChildInputFields();
    } else {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: () => {
            this.showTemporaryMessage('success', 'Your message has been sent.');
            ngForm.resetForm();
            this.resetAll();
          },
          error: () => this.showTemporaryMessage('error', 'Your message has not been sent. Please try again later.'),
          complete: () => console.info('send post complete'),
        });
    }
  }

  markChildInputFields() {
    this.nameItem?.markAsTouched();
    this.emailItem?.markAsTouched();
    return;
  }

  resetAll() {
    this.nameItem.reset();
    this.emailItem.reset();
    this.contactData.policyAccepted = false;
    this.submitAttempted = false;
  }

  ngAfterViewInit() {
    const icon = document.querySelector('.resize-icon') as HTMLElement;
    const textarea = this.messageTextarea.nativeElement;

    if (!icon || !textarea) return;

    this.setupResizeHandlers(icon, textarea);
  }

  private setupResizeHandlers(icon: HTMLElement, textarea: HTMLTextAreaElement) {
    let isResizing = false;
    let startY = 0;
    let startHeight = 0;

    const startResize = (y: number) => this.startResizing(textarea, y, () => {
      isResizing = true;
      startY = y;
      startHeight = textarea.offsetHeight;
    });

    const doResize = (y: number) => {
      if (isResizing) this.performResize(textarea, y - startY, startHeight);
    };

    const stopResize = () => {
      isResizing = false;
      textarea.classList.remove('resizing');
    };

    this.registerResizeEvents(icon, textarea, startResize, doResize, stopResize);
  }

  private startResizing(textarea: HTMLTextAreaElement, y: number, onStart: () => void) {
    onStart();
    textarea.classList.add('resizing');
  }

  private performResize(textarea: HTMLTextAreaElement, deltaY: number, startHeight: number) {
    let newHeight = startHeight + deltaY;
    newHeight = Math.max(200, Math.min(1200, newHeight));
    textarea.style.height = `${newHeight}px`;
  }

  private registerResizeEvents(icon: HTMLElement, textarea: HTMLTextAreaElement, startResize: (y: number) => void,
    doResize: (y: number) => void, stopResize: () => void) {
    icon.addEventListener('mousedown', (e) => {
      e.preventDefault();
      startResize(e.clientY);
    });

    window.addEventListener('mousemove', (e) => doResize(e.clientY));
    window.addEventListener('mouseup', stopResize);

    icon.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        e.preventDefault();
        startResize(e.touches[0].clientY);
      }
    });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1) doResize(e.touches[0].clientY);
    });

    window.addEventListener('touchend', stopResize);
  }
}