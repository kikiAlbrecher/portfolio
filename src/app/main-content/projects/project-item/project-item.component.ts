import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss'
})
export class ProjectItemComponent implements AfterViewInit {
  @Input() projectPhotoUrl!: string;
  @Input() projectTitle!: string;
  @Input() projectStack!: string;
  @Input() projectDescription!: string;
  @Input() liveTestUrl!: string;
  @Input() githubUrl!: string;
  @Input() isReversed: boolean = false;
  @ViewChildren('fadeTarget') fadeTargets!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add('in-view');
          } else {
            target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    this.fadeTargets.forEach((el) => {
      observer.observe(el.nativeElement);
    });
  }
}
