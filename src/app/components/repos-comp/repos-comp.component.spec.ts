import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposCompComponent } from './repos-comp.component';

describe('ReposCompComponent', () => {
  let component: ReposCompComponent;
  let fixture: ComponentFixture<ReposCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
