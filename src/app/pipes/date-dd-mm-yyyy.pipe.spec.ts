import { DateDdMmYyyyPipe } from './myDate.pipe';

describe('DateDdMmYyyyPipe', () => {
  it('create an instance', () => {
    const pipe = new DateDdMmYyyyPipe();
    expect(pipe).toBeTruthy();
  });
});
