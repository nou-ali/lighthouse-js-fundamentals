let stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


// Good stations have at least 20 capacity
//Stations can be schools OR community centres

function chooseStations(station) {
  let goodStations = [];
  for (var i = 0; i < station.length; i++) {
    if ((station[i][2] === "school" || station[i][2] === "community centre") && (station[i][1] >= 20)) {
      { goodStations.push(station[i][0]); }
    }
  }
  return goodStations;
}


