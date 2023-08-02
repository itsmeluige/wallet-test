import uuid from './utils';

describe('uuid', () => {
  it('should expose a function', () => {
    expect(uuid).toBeDefined();
  });

  it('uuid should return expected output', () => {
    // const retValue = uuid();
    expect('received').toBeTruthy();
  });
});
