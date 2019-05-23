import {Component, Input, ViewChild} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @ViewChild('childModal') public childModal:ModalDirective;
  @Input() title?:string;
 constructor() {
 }
 show(){
   this.childModal.show();
 }
 hide(){
   this.childModal.hide();
 }
}