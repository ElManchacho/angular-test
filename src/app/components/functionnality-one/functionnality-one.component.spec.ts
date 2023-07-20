import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionnalityOneComponent } from './functionnality-one.component';

describe('FunctionnalityOneComponent', () => {
  let component: FunctionnalityOneComponent;
  let fixture: ComponentFixture<FunctionnalityOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionnalityOneComponent]
    });
    fixture = TestBed.createComponent(FunctionnalityOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
