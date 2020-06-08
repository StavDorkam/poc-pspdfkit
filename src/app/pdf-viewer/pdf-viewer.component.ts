import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import PSPDFKIT from 'pspdfkit';
import { PDFViewerService } from './pdf-viewer.service';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements AfterViewInit, OnInit {
  @Input() showDocument = '';
  @Input() index: number;
  @Input() allowUpload = false;

  constructor(private pdfService: PDFViewerService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (!this.showDocument) {
      this.pdfService.get().then(val => {
        this.displayPDF(val)
      })
    } else {
      this.displayPDF(this.showDocument)
    }
  }

  displayPDF(pdf) {
    PSPDFKIT.load({
      baseUrl: location.protocol + "//" + location.host + "/assets/",
      document: pdf,
      container: `#pdf-viewer-${this.index}`,
      licenseKey: 'Enter Your License Key Here'
    }).then(instance => {
      console.log('PSPDFKit for Web loaded!');

      // For the sake of this demo, store the PSPDFKit for Web instance
      // on the global object so that you can open the dev tools and
      // play with the PSPDFKit API.
      (window as any).instance = instance;
    })
  }

  OnUpload(file) {
    PSPDFKIT.unload(`#pdf-viewer-${this.index}`);
    this.pdfService.convertFileToArrayBuffer(file)
    .then(arrayBuffer => this.displayPDF(arrayBuffer))
  }

}
