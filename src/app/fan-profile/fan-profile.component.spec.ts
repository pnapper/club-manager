import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanProfileComponent } from './fan-profile.component';

describe('FanProfileComponent', () => {
  let component: FanProfileComponent;
  let fixture: ComponentFixture<FanProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
