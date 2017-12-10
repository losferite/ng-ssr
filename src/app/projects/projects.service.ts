import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ProjectShort } from './project-short.model';
import { environment } from '../../environments/environment';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

const gqltag = gql(`query {
  sectionByDomain(domain: "works.novel.tl") {
    sectionId
    url
    visibleProjects {
      projectId
      url
      title
      status
      translationStatus
      banner {
        url
      }
    }
  }
}`);

@Injectable()
export class ProjectsService {

  private readonly RESULT_KEY = makeStateKey<ProjectShort[]>('projects_store');


  private data: BehaviorSubject<ProjectShort[]>; // = new BehaviorSubject<ProjectShort[]>(this.getProjects());

  projects = this.data.asObservable();

  constructor(private http: HttpClient, private state: TransferState, private apollo: Apollo) { }

  private fetch() {
    // this.http
    //   .get(`${environment.apiHost}/projects?showHidden=false`)
    //   .subscribe((res: ProjectShort[]) => {
    //     this.state.set<ProjectShort[]>(this.RESULT_KEY, res);
    //     this.data.next(res);
    //   });
    this.apollo.query(gqltag).subscribe((res) => {
      console.log(res);
      // this.data = res;
    });
  }

  private getProjects(): ProjectShort[] | null {
    // let data = this.state.get<ProjectShort[]>(this.RESULT_KEY, []);

    // if (!this.state.hasKey(this.RESULT_KEY)) {
      this.fetch();
    // }

    // return this.data;
    return null;
  }
}
