import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/template/header/header.component";
import { FooterComponent } from "../../components/template/footer/footer.component";
import { QcmSocialComponent } from "../../components/form/qcm-social/qcm-social.component";
import { QcmEcoComponent } from "../../components/form/qcm-eco/qcm-eco.component";
import { QcmEnviComponent } from "../../components/form/qcm-envi/qcm-envi.component";
import { QcmGouvComponent } from "../../components/form/qcm-gouv/qcm-gouv.component";
import { QcmLocalComponent } from "../../components/form/qcm-local/qcm-local.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { MarketingComponent } from "../../components/marketing/marketing.component";
import { FeatureComponent } from "../../components/feature/feature.component";
import { AccordeonComponent } from "../../components/accordeon/accordeon.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { NewsletterComponent } from "../../components/newsletter/newsletter.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, QcmSocialComponent, QcmEcoComponent, QcmEnviComponent, QcmGouvComponent, QcmLocalComponent, CarouselComponent, MarketingComponent, FeatureComponent, AccordeonComponent, ContactComponent, NewsletterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
