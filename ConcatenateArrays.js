
function concat (a,b) {
  let c = [].concat(a,b);
  return c;
}
 // second solution below!
function concat (a,b) {
  return [].concat(a,b).sort();
}







