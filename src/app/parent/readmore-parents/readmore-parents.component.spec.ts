import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmoreParentsComponent } from './readmore-parents.component';

describe('ReadmoreParentsComponent', () => {
  let component: ReadmoreParentsComponent;
  let fixture: ComponentFixture<ReadmoreParentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadmoreParentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmoreParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
