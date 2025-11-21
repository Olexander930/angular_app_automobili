import { ShortenPipe } from '../pipes/shorten-pipe';

describe('ShortenPipe', () => {

  it('should shorten long strings with default limit', () => {
    const pipe = new ShortenPipe();
    expect(pipe.transform('This is a very long string')).toBe('This is a very ...');
  });

  it('should return full string if within limit', () => {
    const pipe = new ShortenPipe();
    expect(pipe.transform('Short text')).toBe('Short text');
  });

  it('should use custom limit', () => {
    const pipe = new ShortenPipe();
    expect(pipe.transform('1234567890', 5)).toBe('12345...');
  });

  it('should handle empty values', () => {
    const pipe = new ShortenPipe();
    expect(pipe.transform('')).toBe('');
  });

});
