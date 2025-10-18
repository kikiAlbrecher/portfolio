import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandTableauComponent } from './grand-tableau.component';

describe('GrandTableauComponent', () => {
  let component: GrandTableauComponent;
  let fixture: ComponentFixture<GrandTableauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrandTableauComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrandTableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
