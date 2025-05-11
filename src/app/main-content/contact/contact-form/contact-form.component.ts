import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  http = inject(HttpClient);
  successMessage = '';

  contactData = {
    name: '',
    email: '',
    message: '',
    policyAccepted: false
  }

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

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: () => {
            this.successMessage = 'Your message has been sent.';
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && !ngForm.form.valid) {
      // && this.mailTest, else-if-Teil vielleicht ganz weglassen
      // ngForm.resetForm();
    }
  }

  @ViewChild('messageTextarea', { static: true }) messageTextarea!: ElementRef<HTMLTextAreaElement>;

  ngAfterViewInit() {
    const icon = document.querySelector('.resize-icon') as HTMLElement;
    const textarea = this.messageTextarea.nativeElement;

    if (!icon || !textarea) {
      return;
    }

    let isResizing = false;
    let startY = 0;
    let startHeight = 0;

    const startResize = (y: number) => {
      isResizing = true;
      startY = y;
      startHeight = textarea.offsetHeight;
      textarea.classList.add('resizing');
    };

    const doResize = (y: number) => {
      if (!isResizing) return;
      const deltaY = y - startY;
      let newHeight = startHeight + deltaY;
      newHeight = Math.max(200, Math.min(1200, newHeight));
      textarea.style.height = `${newHeight}px`;
    };

    const stopResize = () => {
      isResizing = false;
      textarea.classList.remove('resizing');
    };

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
      if (e.touches.length === 1) {
        doResize(e.touches[0].clientY);
      }
    });

    window.addEventListener('touchend', stopResize);
  }
}
