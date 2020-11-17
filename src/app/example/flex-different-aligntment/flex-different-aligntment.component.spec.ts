import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexDifferentAligntmentComponent } from './flex-different-aligntment.component';

describe('FlexDifferentAligntmentComponent', () => {
  let component: FlexDifferentAligntmentComponent;
  let fixture: ComponentFixture<FlexDifferentAligntmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexDifferentAligntmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexDifferentAligntmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
