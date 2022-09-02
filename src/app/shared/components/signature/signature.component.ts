import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgxSignatureOptions, NgxSignaturePadComponent } from '@eve-sama/ngx-signature-pad';
import { ModalController } from '@ionic/angular';
import { NgxOtpInputComponent, NgxOtpInputConfig } from 'ngx-otp-input';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss'],
})
export class SignatureComponent implements OnInit {

  @ViewChild('signature') signature: NgxSignaturePadComponent;
  @ViewChild('orderPin') ngxOtp: NgxOtpInputComponent;

  public options: NgxSignatureOptions = {
    backgroundColor: '#F4F5F5',
    width: window.innerWidth - 32,
    css: {
      'border-radius': '0',
    }
  };

  public otpInputConfig: NgxOtpInputConfig = {
    otpLength: 4,
  };

  img: string;
  otp: string;

  constructor(
    public modalController: ModalController
  ) {}

  ngOnInit() { }

  async save() {
    this.img = this.signature.toDataURL();
    const blob = await (await fetch(this.img)).blob();
    const file = new File([blob], 'fileName.png', {type: 'image/png'});

    this.modalController.dismiss({
      image: file,
      otp: this.otp
    });
  }

  clearSignature() {
    this.signature.clear();
  }

  clearOTP() {
    this.ngxOtp.clear();
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  otpInputFilled(event: any) {
    this.otp = event;
  }
}
