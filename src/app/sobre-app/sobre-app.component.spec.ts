import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreAppComponent } from './sobre-app.component';

describe('SobreAppComponent', () => {
  let component: SobreAppComponent;
  let fixture: ComponentFixture<SobreAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobreAppComponent]
    });
    fixture = TestBed.createComponent(SobreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
