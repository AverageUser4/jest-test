let animals;

describe('animals array', () => {
  
  beforeEach(() => {
    console.log('before')
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
  });

  it('should add animal to end of array', () => {
    console.log('test 1')
    animals.push('aligator');
    expect(animals[animals.length - 1]).toBe('aligator');
  });
  
  it('should add animal to beginning of array', () => {
    console.log('test 2')
    animals.unshift('panda');
    expect(animals[0]).toBe('panda');
  });
  
  it('should have initial length of 4', () => {
    console.log('test 3')
    expect(animals.length).toBe(4);
  });

});

describe('testing something else...', () => {

  it('true should be truthy', () => {
    expect(true).toBe(true);
  });
  
});