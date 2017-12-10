import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsService } from './projects/projects.service';


@NgModule({
  declarations: [
    ProjectsComponent,
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
    // HttpClientModule,
    // BrowserTransferStateModule,
    BrowserModule.withServerTransition({ appId: 'rura' }),
  ],
  providers: [
    ProjectsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
