import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfViewerListComponent } from './pdf-viewer-list.component';

describe('PdfViewerListComponent', () => {
  let component: PdfViewerListComponent;
  let fixture: ComponentFixture<PdfViewerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfViewerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfViewerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
