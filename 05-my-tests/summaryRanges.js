function summaryRanges(nums) {
  let results = [[]];
  if(nums.length === 0)
    return [];
  
  for(let i = 0; i < nums.length; i++) {
    const nestedArray = results[results.length - 1];

    if(!nestedArray.length || nums[i] - nestedArray[nestedArray.length - 1] === 1)
      nestedArray.push(nums[i]);
    else
      results.push([nums[i]]);
  }

  return results.map(result => (
    result.length === 1 ? `${result[0]}` : `${result[0]}->${result[result.length - 1]}`
  ));
}

module.exports = {
  summaryRanges
};