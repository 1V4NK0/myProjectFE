import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuoteImgPage } from './quote-img.page';

describe('QuoteImgPage', () => {
  let component: QuoteImgPage;
  let fixture: ComponentFixture<QuoteImgPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteImgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
