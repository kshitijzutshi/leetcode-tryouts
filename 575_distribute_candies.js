/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  let seen = []; // holds max unique candies
  let possibilities = 0;
  let max_possible = candyType.length / 2;
  for (var i = 0; i < candyType.length; i++) {
    if (!seen.includes(candyType[i])) {
      seen.push(candyType[i]);
      possibilities += 1;
    }
  }
  // console.log(seen)
  // console.log(possibilities)
  // console.log(Math.min(max_possible, possibilities))
  return Math.min(max_possible, possibilities);
};
