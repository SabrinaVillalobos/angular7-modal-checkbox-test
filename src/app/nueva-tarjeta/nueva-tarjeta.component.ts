import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-nueva-tarjeta',
  templateUrl: './nueva-tarjeta.component.html',
  styleUrls: ['./nueva-tarjeta.component.scss']
})
export class NuevaTarjetaComponent {

  @ViewChild('childModal') childModal :ModalComponent;
  constructor(private viewContainerRef: ViewContainerRef) {
  }
  model:any={"type": "nueva" }
  private show: boolean = false;
  public showModal: boolean = false;
  public typeCard(str: String): void {
    if (str === "clasica") {
      this.childModal.show()
    } else {
      alert("meph")
    }
}
}  