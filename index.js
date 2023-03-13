function sumItems(array) {
  // Sum all the numbers in the array
 /*  let currSum;
  for (let num of array)
  {
    if(Array.isArray(num))
    {
      return sumItems(currSum + num);
    }
    currSum=+num;
  }
  return currSum; */

  let totalSum = 0;
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      totalSum += sumItems(item);
    } else {
      totalSum += item;
    }
  }
  );
  return totalSum;

}

module.exports = sumItems;