import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para o [class] funcionar se não for standalone puro

@Component({
  selector: 'app-hero',
  standalone: true, // Garanta que está como standalone se seu projeto for assim
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit {
  // Variável de controle
  showAnimation = false;

  ngAfterViewInit() {
    // Pequeno delay para garantir que a hidratação terminou
    setTimeout(() => {
      this.showAnimation = true;
    }, 100);
  }
}