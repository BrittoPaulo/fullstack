import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPessoasComponent } from './criar-pessoa.component';

describe('CriarPessoasComponent', () => {
  let component: CriarPessoasComponent;
  let fixture: ComponentFixture<CriarPessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarPessoasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
