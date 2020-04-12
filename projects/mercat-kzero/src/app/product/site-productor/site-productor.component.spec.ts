import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteProductorComponent } from './site-productor.component';

describe('SiteProductorComponent', () => {
  let component: SiteProductorComponent;
  let fixture: ComponentFixture<SiteProductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SiteProductorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteProductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
