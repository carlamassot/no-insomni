import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NouDiaComponent } from './nou-dia/nou-dia.component';
import { FormioModule } from '@formio/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IniciComponent } from './inici/inici.component';
import { NgbAccordionModule, NgbCollapse, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    NouDiaComponent,
    IniciComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    NgbModule, NgbAlertModule, NgbCollapse, NgChartsModule,NgbAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
