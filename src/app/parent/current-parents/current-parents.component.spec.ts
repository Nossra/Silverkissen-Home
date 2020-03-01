import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentParentsComponent } from './current-parents.component';

describe('CurrentParentsComponent', () => {
  let component: CurrentParentsComponent;
  let fixture: ComponentFixture<CurrentParentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentParentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
