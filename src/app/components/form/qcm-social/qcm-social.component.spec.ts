import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmSocialComponent } from './qcm-social.component';

describe('QcmSocialComponent', () => {
  let component: QcmSocialComponent;
  let fixture: ComponentFixture<QcmSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QcmSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QcmSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
