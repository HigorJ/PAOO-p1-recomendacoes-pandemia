import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecomendacaoListarComponent } from './recomendacao-listar/recomendacao-listar.component';
import { RecomendacaoInserirComponent } from './recomendacao-inserir/recomendacao-inserir.component';

@NgModule({
  declarations: [
    AppComponent,
    RecomendacaoListarComponent,
    RecomendacaoInserirComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
