function addName(personObject, name, force = false) {
  if(typeof personObject !== 'object')
    throw new Error('You should provide object as firts argument to \'addName\' function.')
  if(!force && Object.hasOwn(personObject, 'name'))
    throw new Error('Your object already has a name property');
  if(!name || typeof name !== 'string')
    throw new Error('You provided invalid name to the \'addName\' function.');

  personObject.name = name;
}

module.exports = addName;