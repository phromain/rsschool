import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmComComponent } from './qcm-com.component';

describe('QcmComComponent', () => {
  let component: QcmComComponent;
  let fixture: ComponentFixture<QcmComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QcmComComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QcmComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
