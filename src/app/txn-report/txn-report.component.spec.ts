import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnReportComponent } from './txn-report.component';

describe('TxnReportComponent', () => {
  let component: TxnReportComponent;
  let fixture: ComponentFixture<TxnReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxnReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxnReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
