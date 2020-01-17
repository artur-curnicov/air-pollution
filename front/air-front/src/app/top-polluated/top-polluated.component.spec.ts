import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPolluatedComponent } from './top-polluated.component';

describe('TopPolluatedComponent', () => {
  let component: TopPolluatedComponent;
  let fixture: ComponentFixture<TopPolluatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPolluatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPolluatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
