import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexNavigationAreaComponent } from './flex-navigation-area.component';

describe('FlexNavigationAreaComponent', () => {
  let component: FlexNavigationAreaComponent;
  let fixture: ComponentFixture<FlexNavigationAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexNavigationAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexNavigationAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
