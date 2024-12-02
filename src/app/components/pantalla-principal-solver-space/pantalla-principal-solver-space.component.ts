import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-pantalla-principal-solver-space',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pantalla-principal-solver-space.component.html',
  styleUrl: './pantalla-principal-solver-space.component.css',
  animations: [
    trigger('cardHover', [
      state('normal', style({
        transform: 'translateY(0) scale(1)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      })),
      state('hover', style({
        transform: 'translateY(-10px) scale(1.03)',
        boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
      })),
      transition('normal <=> hover', animate('200ms ease-in-out'))
    ]),
    trigger('fabAnimation', [
      state('closed', style({
        transform: 'rotate(0deg)'
      })),
      state('open', style({
        transform: 'rotate(225deg)'
      })),
      transition('closed <=> open', animate('200ms ease-in-out'))
    ])
  ]
})
export class PantallaPrincipalSolverSpaceComponent {
  fabState: 'open' | 'closed' = 'closed';

  features = [
    {
      icon: 'assets/icons/genera-retos.svg',
      title: 'Genera Retos',
      description: 'Fomenta la creatividad y el pensamiento innovador',
      state: 'normal'
    },
    // Add other features...
  ];

  workers = [
    {
      photo: 'assets/photos/juan-perez.jpg',
      name: 'Juan Pérez',
      position: 'Director de Innovación',
      state: 'normal'
    },
    // Add other workers...
  ];

  rewards = [
    {
      image: 'assets/rewards/bono.svg',
      title: 'Bono de Regalo',
      description: 'Canje por productos seleccionados',
      state: 'normal'
    },
    // Add other rewards...
  ];

  toggleFab() {
    this.fabState = this.fabState === 'closed' ? 'open' : 'closed';
  }

  onComenzarClick() {
    // Implement click handler
    console.log('Comenzar clicked');
  }

  onInnovarClick() {
    // Implement click handler
    console.log('Innovar clicked');
  }
}
