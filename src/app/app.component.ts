import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { PerucasComponent } from './componentes/perucas/perucas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, PerucasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ana-laces';

  home = true;
  perucas = false;

  ngOnInit(): void {
    this.home = true;
  }

  toggleChild(child: number = 1) { 
    if (child === 0) {
      this.home = ! this.home;
      if(this.home) {
        this.perucas = false;
      }

    }else if (child === 1) {
      this.perucas = ! this.perucas;
      if(this.perucas) {
        this.home = false;
      }
    }
  }


}
