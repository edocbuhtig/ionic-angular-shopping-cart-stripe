import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartpopupPage } from './cartpopup.page';

describe('CartpopupPage', () => {
  let component: CartpopupPage;
  let fixture: ComponentFixture<CartpopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartpopupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartpopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
