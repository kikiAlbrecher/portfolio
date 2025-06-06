import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectItemComponent } from './project-item/project-item.component';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule, ProjectItemComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  ngOnInit() {
    AOS.init({ duration: 1000, once: false });
  }

  projects = [
    {
      projectPhotoUrl: 'assets/img/pokedex.png',
      projectTitle: 'Join',
      projectStack: 'JavaScript | HTML | CSS | Firebase',
      projectDescription: 'PROJECTS.DESCRIPTION_JOIN',
      liveTestUrl: 'https://join.christina-albrecher.at',
      githubUrl: 'https://github.com/kikiAlbrecher/join',
    },
    {
      projectPhotoUrl: 'assets/img/pokedex.png',
      projectTitle: 'Pokédex',
      projectStack: 'JavaScript | HTML | CSS | API',
      projectDescription: 'PROJECTS.DESCRIPTION_POKEDEX',
      liveTestUrl: 'https://pokedex.christina-albrecher.at',
      githubUrl: 'https://github.com/kikiAlbrecher/pokedex',
    },
    {
      projectPhotoUrl: 'assets/img/pokedex.png',
      projectTitle: 'Sharky',
      projectStack: 'JavaScript | HTML | CSS',
      projectDescription: 'PROJECTS.DESCRIPTION_SHARKY',
      liveTestUrl: 'https://sharky.christina-albrecher.at',
      githubUrl: 'https://github.com/kikiAlbrecher/sharky',
    }
  ];
}