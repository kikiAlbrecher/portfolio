import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.scss'
})
export class SkillItemComponent {
  @Input() stackIconUrl!: string;
  @Input() stackName!: string;
  @Input() isLearning: boolean = false;
}