import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SkillItemComponent } from './skill-item/skill-item.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule, SkillItemComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  stack = [
    {
      stackIconUrl: 'assets/icons/HTML.svg',
      stackName: 'HTML',
    },
    {
      stackIconUrl: 'assets/icons/CSS.svg',
      stackName: 'CSS',
    },
    {
      stackIconUrl: 'assets/icons/javaScript.svg',
      stackName: 'JavaScript',
    },
    {
      stackIconUrl: 'assets/icons/typeScript.svg',
      stackName: 'TypeScript',
    },
    {
      stackIconUrl: 'assets/icons/angular.svg',
      stackName: 'Angular',
    },
    {
      stackIconUrl: 'assets/icons/firebase.svg',
      stackName: 'Firebase',
    },
    {
      stackIconUrl: 'assets/icons/git.svg',
      stackName: 'Git',
    },
    {
      stackIconUrl: 'assets/icons/API.svg',
      stackName: 'Rest API',
    },
    {
      stackIconUrl: 'assets/icons/scrum.svg',
      stackName: 'Scrum',
    },
    {
      stackIconUrl: 'assets/icons/material-design.svg',
      stackName: 'Material Design',
    },
    {
      stackIconUrl: 'assets/icons/learning-ambition.svg',
      stackName: 'Continually learning',
    }
  ];
}
