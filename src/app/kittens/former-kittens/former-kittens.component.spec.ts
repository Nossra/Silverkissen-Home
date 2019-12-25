import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerKittensComponent } from './former-kittens.component';

describe('FormerKittensComponent', () => {
  let component: FormerKittensComponent;
  let fixture: ComponentFixture<FormerKittensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormerKittensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormerKittensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
