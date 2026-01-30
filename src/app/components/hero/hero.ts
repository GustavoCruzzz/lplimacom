import { Component, AfterViewInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit {
  showAnimation = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef // Injeção necessária para forçar a atualização
  ) {}

  ngAfterViewInit() {
    // Verifica se estamos no navegador (para não dar erro no Server-Side)
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.showAnimation = true;
        
        // O SEGREDO: Força o Angular a detectar a mudança e aplicar a classe na hora
        this.cdr.detectChanges(); 
      }, 100);
    }
  }
}