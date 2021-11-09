import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPessoaComponent } from './visualizar-pessoa.component';

describe('VisualizarPessoaComponent', () => {
  let component: VisualizarPessoaComponent;
  let fixture: ComponentFixture<VisualizarPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
