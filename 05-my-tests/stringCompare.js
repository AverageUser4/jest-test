function stringCompare(str1, str2) {
  if(typeof str1 !== 'string' || typeof str2 !== 'string')
    throw new Error('Both arguments have to be a string.');

  let longer = str1;
  let shorter = str2;

  if(str1.length < str2.length) {
    longer = str2;
    shorter = str1;
  }

  longer = longer.split('');
  const possibleMatches = longer.length;
  let actualMatches = 0;

  if(!possibleMatches)
    return 100;

  for(let i = 0; i < shorter.length; i++) {
    const index = longer.indexOf(shorter[i]);
    if(index !== -1) {
      actualMatches++;
      longer.splice(index, 1);
    }
  }

  return actualMatches / possibleMatches * 100;
}

function getMostSimiliarString(str, arr) {
  if(typeof str !== 'string')
    throw new Error('First argument has to be a string.');
  if(!Array.isArray(arr) || !arr.length)
    throw new Error('Second argument has to be an non-empty array.');
  if(arr.findIndex(element => typeof element !== 'string') !== -1)
    throw new Error('Second argument can contain only strings.');

  const mostSimiliar = { value: arr[0], percent: 0 };

  for(let i = 1; i < arr.length; i++) {
    const percent = stringCompare(str, arr[i]);

    if(percent > mostSimiliar.percent) {
      mostSimiliar.value = arr[i];
      mostSimiliar.percent = percent;
    }
  }

  return mostSimiliar.value;
}

module.exports = {
  stringCompare,
  getMostSimiliarString,
};