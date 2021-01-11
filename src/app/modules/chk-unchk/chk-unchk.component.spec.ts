import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChkUnchkComponent } from './chk-unchk.component';

describe('ChkUnchkComponent', () => {
  let component: ChkUnchkComponent;
  let fixture: ComponentFixture<ChkUnchkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChkUnchkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChkUnchkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
