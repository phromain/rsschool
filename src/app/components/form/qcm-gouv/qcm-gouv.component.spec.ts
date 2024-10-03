import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmGouvComponent } from './qcm-gouv.component';

describe('QcmGouvComponent', () => {
  let component: QcmGouvComponent;
  let fixture: ComponentFixture<QcmGouvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QcmGouvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QcmGouvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
