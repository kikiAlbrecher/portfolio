import { Component } from '@angular/core';
import { SharkyComponent } from './sharky/sharky.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SharkyComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
