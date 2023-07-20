import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionnalityTwoComponent } from './functionnality-two.component';

describe('FunctionnalityTwoComponent', () => {
  let component: FunctionnalityTwoComponent;
  let fixture: ComponentFixture<FunctionnalityTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionnalityTwoComponent]
    });
    fixture = TestBed.createComponent(FunctionnalityTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
