import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuoteOfTheDayPage } from './quote-of-the-day.page';

describe('QuoteOfTheDayPage', () => {
  let component: QuoteOfTheDayPage;
  let fixture: ComponentFixture<QuoteOfTheDayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteOfTheDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
