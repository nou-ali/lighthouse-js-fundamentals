function lastIndexOf (arr, element) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (element === arr[i]) {
      return i;
    }
  }
  return -1;
}
  
