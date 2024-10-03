import { Component } from '@angular/core';
import { QcmSocialComponent } from "../../components/form/qcm-social/qcm-social.component";
import { QcmEnviComponent } from "../../components/form/qcm-envi/qcm-envi.component";
import { QcmEcoComponent } from "../../components/form/qcm-eco/qcm-eco.component";
import { QcmLocalComponent } from "../../components/form/qcm-local/qcm-local.component";
import { QcmGouvComponent } from "../../components/form/qcm-gouv/qcm-gouv.component";
import { HeaderComponent } from "../../components/template/header/header.component";
import { FooterComponent } from "../../components/template/footer/footer.component";
import {NgIf} from "@angular/common";
import { QcmResultComponent } from "../../components/qcm-result/qcm-result.component";
import { QcmComComponent } from "../../components/form/qcm-com/qcm-com.component";


@Component({
  selector: 'app-qcm',
  standalone: true,
  imports: [QcmSocialComponent, QcmEnviComponent, QcmEcoComponent, QcmLocalComponent, QcmGouvComponent, HeaderComponent, FooterComponent, NgIf, QcmResultComponent, QcmComComponent],
  templateUrl: './qcm.component.html',
  styleUrl: './qcm.component.css'
})
export class QcmComponent {
  currentStep = 0;

  onNext() {
    if (this.currentStep < 6) {
      this.currentStep++;
    }
  }

  onPrevious() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
