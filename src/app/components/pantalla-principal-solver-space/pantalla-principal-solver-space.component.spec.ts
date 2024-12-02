import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PantallaPrincipalSolverSpaceComponent } from './pantalla-principal-solver-space.component';

describe('PantallaPrincipalSolverSpaceComponent', () => {
  let component: PantallaPrincipalSolverSpaceComponent;
  let fixture: ComponentFixture<PantallaPrincipalSolverSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PantallaPrincipalSolverSpaceComponent,
        BrowserAnimationsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PantallaPrincipalSolverSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle FAB state', () => {
    expect(component.fabState).toBe('closed');
    component.toggleFab();
    expect(component.fabState).toBe('open');
    component.toggleFab();
    expect(component.fabState).toBe('closed');
  });

  it('should have initial states for cards', () => {
    expect(component.features[0].state).toBe('normal');
    expect(component.workers[0].state).toBe('normal');
    expect(component.rewards[0].state).toBe('normal');
  });
});