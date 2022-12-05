const axios = require('axios');

let config = {
  headers: {
    'accept-encoding': null
  }
}

async function fetchData(id) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`, config);
  console.log(response)
  return response.data;
}

function forEach(items, callback) {
  for(let item of items)
    callback(item);
}

describe('mocks', () => {

  it('mock callback', () => {
    const mockCallback = jest.fn(x => 42 + x);

    forEach([0, 1], mockCallback);

    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    expect(mockCallback.mock.results[0].value).toBe(42);
  });

  it('mock return', () => {
    const mock = jest.fn();
    mock.mockReturnValueOnce(true);
    expect(mock()).toBe(true);
  });
  
  it('mock axios', async () => {
    jest.spyOn(axios, 'get').mockReturnValueOnce({ data: { id: 1 } });
    const results = await fetchData(1);
    expect(results.id).toBe(1);
  });
  
});