import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBrowserBottomFooterComponent } from './flex-browser-bottom-footer.component';

describe('FlexBrowserBottomFooterComponent', () => {
  let component: FlexBrowserBottomFooterComponent;
  let fixture: ComponentFixture<FlexBrowserBottomFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexBrowserBottomFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexBrowserBottomFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
