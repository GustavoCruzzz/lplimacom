import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Servicos } from './components/servicos/servicos';
import { Clientes } from './components/clientes/clientes';
import { Depoimentos } from './components/depoimentos/depoimentos';
import { Footer } from './components/footer/footer';
import { SocialMedia } from './components/social-media/social-media';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    Hero,
    Servicos,
    Clientes,
    Depoimentos,
    Footer,
    SocialMedia
  ],
  templateUrl: './app.html'
})
export class AppComponent {}
