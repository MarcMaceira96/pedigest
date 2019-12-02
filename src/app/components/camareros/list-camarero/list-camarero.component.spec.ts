import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCamareroComponent } from './list-camarero.component';

describe('ListCamareroComponent', () => {
  let component: ListCamareroComponent;
  let fixture: ComponentFixture<ListCamareroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCamareroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCamareroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
