import { CapitalizePipe } from 'libs/m6-common/pipes/capitalize.pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });
});
