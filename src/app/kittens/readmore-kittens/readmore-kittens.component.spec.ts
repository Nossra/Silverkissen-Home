import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmoreKittensComponent } from './readmore-kittens.component';

describe('ReadmoreKittensComponent', () => {
  let component: ReadmoreKittensComponent;
  let fixture: ComponentFixture<ReadmoreKittensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadmoreKittensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmoreKittensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
