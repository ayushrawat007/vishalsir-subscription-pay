import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnDataComponent } from './txn-data.component';

describe('TxnDataComponent', () => {
  let component: TxnDataComponent;
  let fixture: ComponentFixture<TxnDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxnDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxnDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
