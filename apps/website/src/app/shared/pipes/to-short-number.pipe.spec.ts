import { ToShortNumberPipe } from './to-short-number.pipe';

describe('ToShortNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new ToShortNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
