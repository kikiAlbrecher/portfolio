import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormItemComponent } from './contact-form-item.component';

describe('ContactFormItemComponent', () => {
  let component: ContactFormItemComponent;
  let fixture: ComponentFixture<ContactFormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
