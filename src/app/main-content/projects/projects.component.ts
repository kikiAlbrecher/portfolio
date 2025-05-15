import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectItemComponent } from './project-item/project-item.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule, ProjectItemComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectIndex = 0;

  projects = [
    {
      projectPhotoUrl: 'assets/img/pokedex.png',


      liveTestUrl: 'https://sharky.christina-albrecher.at',
      githubUrl: 'https://github.com/kikiAlbrecher/pokedex',
    }
  ];
}
