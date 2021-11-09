
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCoresComponent } from './listar-cores.component';

describe('ListarCoresComponent', () => {
  let component: ListarCoresComponent;
  let fixture: ComponentFixture<ListarCoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
