const fetchData = require('./async');

describe('async testing', () => {

  it('using promise', () => {
    return fetchData(1).then(data => expect(data).toBe(1));
  });

  it('using async/await', async () => {
    expect(await fetchData(2)).toBe(2);
  });

  it('using resolves', async () => {
    await expect(fetchData(3)).resolves.toBe(3);
  });
  
});