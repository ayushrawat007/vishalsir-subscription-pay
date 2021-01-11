import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IframelyEmbedComponent } from './iframely-embed.component';

describe('IframelyEmbedComponent', () => {
  let component: IframelyEmbedComponent;
  let fixture: ComponentFixture<IframelyEmbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IframelyEmbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IframelyEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
