import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HomeService } from '../../services/home.service';

interface Challenge {
  id: number;
  title: string;
  description: string;
}

interface Worker {
  id: number;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-pantalla-principal-solver-space',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [HomeService],
  templateUrl: './pantalla-principal-solver-space.component.html',
  styleUrls: ['./pantalla-principal-solver-space.component.css'], // Corrección aquí
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
export class PantallaPrincipalSolverSpaceComponent implements OnInit {
  workerName: string = 'Nombre del Trabajador'; // Esto también puede venir del backend
  challenges: any[] = [];
  users: any[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.workerName = 'Nombre del Trabajador';

    this.challenges = [
      { id: 1, title: 'Reto 1', description: 'Descripción del reto 1' },
      { id: 2, title: 'Reto 2', description: 'Descripción del reto 2' },
      { id: 3, title: 'Reto 3', description: 'Descripción del reto 3' },
    ];
  /*
    this.workers = [
      { photo: 'assets/photos/juan-perez.jpg', name: 'Juan Pérez', position: 'Director de Innovación' },
      { photo: 'assets/photos/maria-lopez.jpg', name: 'María López', position: 'Analista Senior' },
      { photo: 'assets/photos/carlos-gomez.jpg', name: 'Carlos Gómez', position: 'Ingeniero de Proyectos' },
      { photo: 'assets/photos/ana-torres.jpg', name: 'Ana Torres', position: 'Gestora de Innovación' },
      { photo: 'assets/photos/luis-sanchez.jpg', name: 'Luis Sánchez', position: 'Coordinador Técnico' },
    ];*/
  }


  /**
   * Carga los retos destacados desde el backend.
   */
  loadChallenges(): void {
    this.homeService.getChallenges().subscribe({
      next: (data: any[]) => {
        this.challenges = data;
      },
      error: (error: any) => {
        console.error('Error al cargar los retos:', error);
      },
    });
  }

  /**
   * Carga los usuarios destacados desde el backend.
   */
  loadUsers(): void {
    this.homeService.getUsers().subscribe({
      next: (data: any[]) => {
        this.users = data;
      },
      error: (error: any) => {
        console.error('Error al cargar los usuarios:', error);
      },
    });
  }

  viewChallenge(challengeId: number): void {
    console.log(`Ver información del reto con ID: ${challengeId}`);
    // Implementa navegación aquí
  }

  solveChallenge(challengeId: number): void {
    console.log(`Solucionar reto con ID: ${challengeId}`);
    // Implementa navegación aquí
  }

  createChallenge(): void {
    console.log('Crear nuevo reto');
    // Implementa navegación aquí
  }

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
