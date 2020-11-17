import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFontComponent } from './mat-font.component';

describe('MatFontComponent', () => {
  let component: MatFontComponent;
  let fixture: ComponentFixture<MatFontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatFontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
