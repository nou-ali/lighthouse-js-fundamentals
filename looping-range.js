function range (start, end, step) {
  let evenNumbers = [];
  if (start > end || step <= 0 || start === undefined || end === undefined || step === undefined) {
    return [];
  } else {
    for (let i = start; i <= end; i = i + step)
      evenNumbers.push(i);
  }
  return evenNumbers; 
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));



