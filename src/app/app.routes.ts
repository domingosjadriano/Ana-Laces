import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component'; 
import { Component } from '@angular/core';
import { CacheadaComponent } from './componentes/cacheada/cacheada.component';
import { LisaComponent } from './componentes/lisa/lisa.component';
import { CurtaComponent } from './componentes/curta/curta.component';
import { OnduladaComponent } from './componentes/ondulada/ondulada.component';
import { PerucasComponent } from './componentes/perucas/perucas.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cacheada', component: CacheadaComponent },
    { path: 'lisa', component: LisaComponent },
    { path: 'curta', component: CurtaComponent },
    { path: 'ondulada', component: OnduladaComponent },
    { path: 'perucas', component: PerucasComponent }
];
