import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderDescriptionDocument, OrderDescriptionDocumentTypeEnum } from 'src/api/models';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-order-document-preview',
  templateUrl: './order-document-preview.component.html',
  styleUrls: ['./order-document-preview.component.scss'],
})
export class OrderDocumentPreviewComponent implements OnInit {

  @Input() documents: OrderDescriptionDocument[];
  readonly OrderDescriptionDocumentTypeEnum = OrderDescriptionDocumentTypeEnum;
  @Output() deleteButtonEvent = new EventEmitter<any>();
  @Input() showDeleteButton = true;

  constructor() { }

  ngOnInit() {}

  async view(url) {
    await Browser.open({ url });
  }

  delete(itemId) {
    this.deleteButtonEvent.emit(itemId);
  }
}
