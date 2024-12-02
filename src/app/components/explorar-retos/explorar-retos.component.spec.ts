import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorarRetosComponent } from './explorar-retos.component';

describe('ExplorarRetosComponent', () => {
  let component: ExplorarRetosComponent;
  let fixture: ComponentFixture<ExplorarRetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorarRetosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorarRetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
