import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recomendacao-inserir',
  templateUrl: './recomendacao-inserir.component.html',
  styleUrls: ['./recomendacao-inserir.component.css']
})
export class RecomendacaoInserirComponent implements OnInit {
  @Output() recomendacaoInserida = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onRecomendacaoInserida(recomendacao) {
    this.recomendacaoInserida.emit(recomendacao);
  }
}
