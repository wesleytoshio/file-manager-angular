import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  closeResult = '';
  constructor(private config: NgbModalConfig,
    private modalService: NgbModal) {
    config.backdrop = 'static';
  }
  open(content: any) {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title', centered: true, fullscreen: true }).result
      .then(result => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      })

  }
  onModalClose() {
    console.log('aaaaaaaaaaaaaaaaaaaaaa');

    // this.modal.dismiss('Cross click')
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
