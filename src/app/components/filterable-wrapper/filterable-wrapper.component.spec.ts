import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterableWrapperComponent } from './filterable-wrapper.component';

describe('FilterableWrapperComponent', () => {
  let component: FilterableWrapperComponent;
  let fixture: ComponentFixture<FilterableWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterableWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
