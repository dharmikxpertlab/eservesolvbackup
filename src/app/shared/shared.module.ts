import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryHeaderComponent } from './components/header/primary-header/primary-header.component';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EservsolComponent } from './components/header/eservsol/eservsol.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormFooterComponent } from './components/footer/form-footer/form-footer.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { OrderSmallCardComponent } from './components/order/order-small-card/order-small-card.component';
import { OrderStatusStepperComponent } from './components/order/order-status-stepper/order-status-stepper.component';
import { LocationCardComponent } from '../pages/locations/components/location-card/location-card.component';
import { AccordionComponent } from '../pages/auth/profile/component/accordion/accordion.component';
import { SearchResultItemComponent } from '../pages/customers/search/components/search-result-item/search-result-item.component';
import { ServiceProviderOptionsComponent } from '../pages/customers/search/components/service-provider-options/service-provider-options.component';
import { ContactComponent } from '../pages/customers/orders/components/contact/contact.component';
import { OrderAreaOptionComponent } from '../pages/customers/orders/components/order-area-option/order-area-option.component';
import { OrderTypeOptionComponent } from '../pages/customers/orders/components/order-type-option/order-type-option.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { OrderByKeyPipe } from './pipe/order-by-key.pipe';
import { OrderDocumentPreviewComponent } from './components/order/order-document-preview/order-document-preview.component';
import { SearchResultItemChooseButtonComponent } from '../pages/customers/search/components/search-result-item-choose-button/search-result-item-choose-button.component';
import { RouterModule } from '@angular/router';
import { FilterByKeyPipe } from './pipe/filter-by-key.pipe';
import { NgPipesModule } from 'ngx-pipes';
import { ConfirmSearchCandidatesComponent } from '../pages/customers/search/components/confirm-search-candidates/confirm-search-candidates.component';
import { OrderListAccordionComponent } from './components/order/order-list-accordion/order-list-accordion.component';
import { OrderDetailsComponent } from './components/order/order-details/order-details.component';
import { OrderListItemComponent } from '../pages/technicians/orders/components/order-list-item/order-list-item.component';
import { CompanyLabelComponent } from '../pages/company/components/company-label/company-label.component';
import { OrderDetailItemLargeComponent } from '../pages/technicians/orders/components/order-detail-item-large/order-detail-item-large.component';
import { OrderDetailItemSmallComponent } from '../pages/technicians/orders/components/order-detail-item-small/order-detail-item-small.component';
import { SignatureComponent } from './components/signature/signature.component';
import { NgxSignaturePadModule } from '@eve-sama/ngx-signature-pad';
import { OrderCompletionCardComponent } from './components/order/order-completion-card/order-completion-card.component';
import { DashboardSummaryItemComponent } from './components/dashboard-summary-item/dashboard-summary-item.component';
import { ProfilePictureComponent } from '../pages/auth/profile/components/profile-picture/profile-picture.component';
import { EmployeeListItemComponent } from './components/employee-list-item/employee-list-item.component';
import { EmployeeSelectionComponent } from '../pages/technicians/manager/components/employee-selection/employee-selection.component';
import { OrderUserBannerComponent } from '../pages/technicians/manager/components/order-user-banner/order-user-banner.component';
import { ConfirmOrderAcceptComponent } from '../pages/technicians/components/confirm-order-accept/confirm-order-accept.component';
import { OrderTypeBadgeComponent } from './components/order/order-type-badge/order-type-badge.component';
import { OrderEmergencyUntilTextComponent } from './components/order/order-emergency-until-text/order-emergency-until-text.component';
import { OrderTimeInformationDivComponent } from './components/order/order-time-information-div/order-time-information-div.component';
import { NgxOtpInputModule } from 'ngx-otp-input';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    PrimaryHeaderComponent,
    EservsolComponent,
    FormFooterComponent,
    OrderSmallCardComponent,
    OrderStatusStepperComponent,
    LocationCardComponent,
    AccordionComponent,
    SearchResultItemComponent,
    ServiceProviderOptionsComponent,
    ContactComponent,
    OrderAreaOptionComponent,
    OrderTypeOptionComponent,
    SortingComponent,
    OrderByKeyPipe,
    OrderDocumentPreviewComponent,
    SearchResultItemChooseButtonComponent,
    FilterByKeyPipe,
    ConfirmSearchCandidatesComponent,
    OrderListAccordionComponent,
    OrderDetailsComponent,
    OrderListItemComponent,
    CompanyLabelComponent,
    OrderDetailItemLargeComponent,
    OrderDetailItemSmallComponent,
    SignatureComponent,
    OrderCompletionCardComponent,
    DashboardSummaryItemComponent,
    ProfilePictureComponent,
    EmployeeListItemComponent,
    EmployeeSelectionComponent,
    OrderUserBannerComponent,
    ConfirmOrderAcceptComponent,
    OrderTypeBadgeComponent,
    OrderEmergencyUntilTextComponent,
    OrderTimeInformationDivComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgPipesModule,
    NgxSignaturePadModule,
    NgxOtpInputModule,
    NgxPermissionsModule.forChild(),
  ],
  exports: [
    PrimaryHeaderComponent,
    MaterialModule,
    CommonModule,
    FormsModule,
    IonicModule,
    NgPipesModule,
    ReactiveFormsModule,
    EservsolComponent,
    TranslateModule,
    FormFooterComponent,
    NgxPermissionsModule,
    OrderSmallCardComponent,
    OrderStatusStepperComponent,
    LocationCardComponent,
    AccordionComponent,
    SearchResultItemComponent,
    ServiceProviderOptionsComponent,
    ContactComponent,
    OrderAreaOptionComponent,
    OrderTypeOptionComponent,
    SortingComponent,
    OrderByKeyPipe,
    FilterByKeyPipe,
    OrderDocumentPreviewComponent,
    SearchResultItemChooseButtonComponent,
    ConfirmSearchCandidatesComponent,
    OrderListAccordionComponent,
    OrderDetailsComponent,
    OrderListItemComponent,
    CompanyLabelComponent,
    OrderDetailItemLargeComponent,
    OrderDetailItemSmallComponent,
    SignatureComponent,
    NgxSignaturePadModule,
    OrderCompletionCardComponent,
    DashboardSummaryItemComponent,
    ProfilePictureComponent,
    EmployeeListItemComponent,
    EmployeeSelectionComponent,
    OrderUserBannerComponent,
    ConfirmOrderAcceptComponent,
    OrderTypeBadgeComponent,
    OrderEmergencyUntilTextComponent,
    OrderTimeInformationDivComponent,
  ]
})
export class SharedModule { }
