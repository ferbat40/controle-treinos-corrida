import { Component,  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
  EventEmitter,
  SimpleChanges} from '@angular/core';
  
  import * as M from 'materialize-css';

  interface ModalContent {
    titulo: string;
    texto: string;
    show: boolean;
  }

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() content?: ModalContent;
  @Input() show: boolean = false;
  @Output() close = new EventEmitter<boolean>();

  @ViewChild('modal1') modal?: ElementRef;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.content?.show) {
      M.Modal.init(this.modal?.nativeElement, {})?.open();
    }
  }

  onClose() {
    this.close.emit(false);
  }

  ngOnInit(): void {}
}
