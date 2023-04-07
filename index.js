function hasTargetSum(array, target) {
  // Write your algorithm here
}
    for (let i = 0; i < array.length; i++) {
      const complement = target - array[i];
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] === complement)
        return true;
        }
      }return false;
    
