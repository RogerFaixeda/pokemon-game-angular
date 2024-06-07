import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSessioFaixedaComponent } from './iniciar-sessio-faixeda.component';

describe('IniciarSessioFaixedaComponent', () => {
  let component: IniciarSessioFaixedaComponent;
  let fixture: ComponentFixture<IniciarSessioFaixedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSessioFaixedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSessioFaixedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
