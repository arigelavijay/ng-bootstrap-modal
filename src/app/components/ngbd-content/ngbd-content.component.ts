import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-ngbd-content',
  templateUrl: './ngbd-content.component.html',
  styleUrls: ['./ngbd-content.component.css']
})
export class NgbdContentComponent implements OnInit {

  @Input() Data;
  constructor(public activeModal: NgbActiveModal) {

    debugger;
   }

  ngOnInit() {
  }

  OnClose() {
    this.activeModal.close({
      name: 'Vijaya Babu Updated',
      email: 'arigelavijayababu@gmail.com'
    })
  }

}
