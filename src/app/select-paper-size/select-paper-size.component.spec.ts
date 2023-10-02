import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPaperSizeComponent } from './select-paper-size.component';

describe('SelectPaperSizeComponent', () => {
  let component: SelectPaperSizeComponent;
  let fixture: ComponentFixture<SelectPaperSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectPaperSizeComponent],
    });
    fixture = TestBed.createComponent(SelectPaperSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const { formatNumber } = require('./your-number-formatting-file');

  describe('formatNumber', () => {
    it('should format a positive integer with commas', () => {
      expect(formatNumber(1000)).toBe('1,000');
      expect(formatNumber(1000000)).toBe('1,000,000');
      expect(formatNumber(123456789)).toBe('123,456,789');
    });

    it('should throw an error for non-positive integers', () => {
      expect(() => formatNumber(-1000)).toThrow(
        'Input must be a positive integer.'
      );
      expect(() => formatNumber(0)).toThrow(
        'Input must be a positive integer.'
      );
    });

    it('should throw an error for non-integer input', () => {
      expect(() => formatNumber(12.34)).toThrow(
        'Input must be a positive integer.'
      );
      expect(() => formatNumber('123')).toThrow(
        'Input must be a positive integer.'
      );
    });
  });
});
