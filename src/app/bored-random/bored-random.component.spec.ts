import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredRandomComponent } from './bored-random.component';

describe('BoredRandomComponent', () => {
  let component: BoredRandomComponent;
  let fixture: ComponentFixture<BoredRandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoredRandomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoredRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
