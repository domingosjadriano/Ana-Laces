import { Component, OnInit } from '@angular/core';
import { PERUCAS } from '../../../db-data';
import { CacheadaComponent } from '../cacheada/cacheada.component';
import { LisaComponent } from '../lisa/lisa.component';
import { OnduladaComponent } from '../ondulada/ondulada.component';
import { CurtaComponent } from '../curta/curta.component';
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CacheadaComponent,
    LisaComponent,
    OnduladaComponent,
    CurtaComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  inicio = true;
  cacheada = false;
  ondulada = false;
  curta = false;
  lisa = false;
  

  ngOnInit(): void {
    this.inicio = true;
  }

  toggleChild(child: number = 1) { 
    if (child === 0) {
      this.inicio = ! this.inicio;
      if(this.inicio) {
        this.cacheada = false;
      }
      if(this.inicio) {
        this.ondulada = false;
      }
      if(this.inicio) {
        this.curta = false;
      }
      if(this.inicio) {
        this.lisa = false;
      }else{this.inicio = true}

    }else if (child === 1) {
      this.cacheada = ! this.cacheada;
      if(this.cacheada) {
        this.inicio = false;
      }
      if(this.cacheada) {
        this.ondulada = false;
      }
      if(this.cacheada) {
        this.curta = false;
      }
      if(this.cacheada) {
        this.lisa = false;
      }
    }else if (child === 2) {
      this.ondulada = ! this.ondulada;
      if(this.ondulada) {
        this.inicio = false;
      }
      if(this.ondulada) {
        this.cacheada = false;
      }
      if(this.ondulada) {
        this.curta = false;
      }
      if(this.ondulada) {
        this.lisa = false;
      }
    }else if (child === 3) {
      this.lisa = ! this.lisa;
      if(this.lisa) {
        this.inicio = false;
      }
      if(this.lisa) {
        this.cacheada = false;
      }
      if(this.lisa) {
        this.curta = false;
      }
      if(this.lisa) {
        this.ondulada = false;
      }
    }else if (child === 4) {
      this.curta = ! this.curta;
      if(this.curta) {
        this.inicio = false;
      }
      if(this.curta) {
        this.cacheada = false;
      }
      if(this.curta) {
        this.lisa = false;
      }
      if(this.curta) {
        this.ondulada = false;
      }
    }
  }

  perucas = PERUCAS;
  perucaSelecionada: any;
  realBr: number | null = null;

  //APRESENTAR APENAS 2-2 PERUCAS NA PAGINA INICIAL
  getPerucasPorCategoria(categoria: string) {
    return this.perucas.filter(peruca => peruca.categoria === categoria).slice(0, 2);
  }
  getPerucasPorCategoriaOne(categoria: string) {
    return this.perucas.filter(peruca => peruca.categoria === categoria).slice(2, 4);
  }

  //SELECIONAR PERUCA POR CARD BY ID (JANELA MODAL)
  escolhaPeruca(id: number) {

    this.perucaSelecionada = this.perucas.find(peruca => peruca.id === id);
    const modalElement = document.getElementById('perucaModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }

    //Kwanza para Real

  const kwanza = parseFloat(this.perucaSelecionada.preco);
  const taxa: number = 0.0064;
  const resultado = (kwanza * taxa).toFixed(2);

  this.realBr = parseFloat(resultado);
  }

  

}


