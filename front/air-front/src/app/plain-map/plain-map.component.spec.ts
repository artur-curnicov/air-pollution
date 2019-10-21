import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainMapComponent } from './plain-map.component';

describe('PlainMapComponent', () => {
  let component: PlainMapComponent;
  let fixture: ComponentFixture<PlainMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
