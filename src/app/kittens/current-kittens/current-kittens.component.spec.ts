import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentKittensComponent } from './current-kittens.component';

describe('CurrentKittensComponent', () => {
  let component: CurrentKittensComponent;
  let fixture: ComponentFixture<CurrentKittensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentKittensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentKittensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
