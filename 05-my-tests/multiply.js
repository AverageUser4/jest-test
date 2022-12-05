function multiply(...args) {
  if(args.length <= 1)
    throw new Error('You have to provide at least 2 arguments to multiply function');

  let result = 1;
  for(let arg of args) {
    result *= Number(arg);
    if(Number.isNaN(result))
      throw new Error('Found a value that could not be converted to valid number.');
  }

  return result;
}

module.exports = multiply;