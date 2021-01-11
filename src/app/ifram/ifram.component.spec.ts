import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IframComponent } from './ifram.component';

describe('IframComponent', () => {
  let component: IframComponent;
  let fixture: ComponentFixture<IframComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IframComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IframComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
