import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { ProjectShort } from './project-short.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:Array<ProjectShort>;

  constructor(private client: ProjectsService) { }

  ngOnInit() {
    this.client.projects.subscribe(res => this.projects = res);
  }

}
