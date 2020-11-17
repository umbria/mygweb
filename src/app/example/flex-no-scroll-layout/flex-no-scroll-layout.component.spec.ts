import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexNoScrollLayoutComponent } from './flex-no-scroll-layout.component';

describe('FlexNoScrollLayoutComponent', () => {
  let component: FlexNoScrollLayoutComponent;
  let fixture: ComponentFixture<FlexNoScrollLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexNoScrollLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexNoScrollLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
