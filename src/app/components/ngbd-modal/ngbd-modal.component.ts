import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdContentComponent } from '../ngbd-content/ngbd-content.component';

@Component({
  selector: 'app-ngbd-modal',
  templateUrl: './ngbd-modal.component.html',
  styleUrls: ['./ngbd-modal.component.css']
})
export class NgbdModalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(NgbdContentComponent);
    modalRef.componentInstance.Data = {
      name: 'Vijaya Babu',
      email: 'varigela@ivycomptech.com'
    };

    modalRef.result.then((result) => {
      alert(`email:${result.email} name:${result.name}`);
    });
  }

}
