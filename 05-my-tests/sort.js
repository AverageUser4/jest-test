function sort(array) {
  if(!Array.isArray(array))
    throw new Error('Sort takes an array as it\'s first argument.');
  if(array.find((item) => Number.isNaN(Number(item))))
    throw new Error('The array contains invalid item that could not be converted to a number');
  
  const copy = [...array];

  while(array.length > 1) {
    for(let i = 0; i < copy.length - 1; i++) {
      const buf = copy[i];
      if(copy[i] > copy[i + 1]) {
        copy[i] = copy[i + 1];
        copy[i + 1] = buf;
      }
    }
    for(let i = 1; i < copy.length; i++) {
      if(copy[i] < copy[i - 1])
        break;

      if(i === copy.length - 1)
        return copy;
    }
  }

  return copy;
}

module.exports = sort;