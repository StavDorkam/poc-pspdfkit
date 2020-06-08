import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfViewerListComponent } from './pdf-viewer-list/pdf-viewer-list.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfViewerListComponent,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
