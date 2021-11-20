const smartGarbage = function (trash, bins) {
  bins[trash] = bins[trash] + 1;
  return bins;
};
 // or
smartGarbage({ waste: 4, recycling: 2, compost: 5 }, "recycling");

const smartGarbage = function (trash, bins) {
  bins[trash] ++; 
  return bins;
};

smartGarbage({ waste: 4, recycling: 2, compost: 5 }, "recycling");

