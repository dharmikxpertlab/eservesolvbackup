import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-search-candidates',
  templateUrl: './confirm-search-candidates.component.html',
  styleUrls: ['./confirm-search-candidates.component.scss'],
})
export class ConfirmSearchCandidatesComponent implements OnInit {

  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() {}

}
