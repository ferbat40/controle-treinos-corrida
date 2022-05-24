import { Component, OnInit, OnChanges,Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.scss']
})
export class AcaoComponent implements OnInit , OnChanges {
  
  @Input() tipo: string="";
  
  @Output() evento = new EventEmitter<string>();
  background = 'amber';


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    
        this.evento.emit("Modulo escolhido foi "+this.tipo);
     
  }

}
