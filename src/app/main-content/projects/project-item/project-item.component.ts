import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss'
})
export class ProjectItemComponent {
  @Input() projectPhotoUrl!: string;
  @Input() projectTitle!: string;
  @Input() projectStack!: string;
  @Input() projectDescription!: string;
  @Input() liveTestUrl!: string;
  @Input() githubUrl!: string;
  @Input() isReversed: boolean = false;
}
