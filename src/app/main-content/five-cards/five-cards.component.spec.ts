import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveCardsComponent } from './five-cards.component';

describe('FiveCardsComponent', () => {
  let component: FiveCardsComponent;
  let fixture: ComponentFixture<FiveCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiveCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
