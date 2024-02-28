var increasingTriplet = function (nums) {
  let firstMin = Infinity;
  let secondMin = Infinity;

  for (let num of nums) {
    if (num <= firstMin) {
      firstMin = num;
    } else if (num <= secondMin) {
      secondMin = num;
    } else {
      return true;
    }
  }

  return false;
};

/*

var increasingTriplet = function(nums) {
    let a;
    let b;
    let c;

    for (let i = 0; i < nums.length - 1; i++) {
        if (typeof a === 'undefined') {
            a = nums[i];
        } else {
            if (nums[i] <= a) {
                a = nums[i];
            } else {
                if (typeof b === 'undefined' || nums[i] <= b) {
                    b = nums[i];
                } else {
                    return true
                }
            }
        }
    }

    return false;
};
*/
