import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdfViewerListComponent } from './pdf-viewer-list/pdf-viewer-list.component';


const routes: Routes = [
  {
    path: '',
    component: PdfViewerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
