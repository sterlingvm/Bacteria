var topFiveCityNames = cityGrowths.map(city => city.City);
// parseInt() - used below \/ - converts strings into integers.  VERY USEFUL
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));


var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);




// Challenge - create a graph of top 7 cities by population

// Declare necessary Variables
// Sorted cities variable based on population
var sortedCities = cityGrowths.sort((a,b) => a.population - b.population).reverse();
// Top seven sliced variable for city name
var topSevenCities = sortedCities.map(city => city.City).slice(0,7);
// Top seven sliced variable for city population
var topSevenPops = sortedCities.map(city => parseInt(city.population)).slice(0,7);

// Fleshing out bar chart
var trace = {
    x: topSevenCities,
    y: topSevenPops,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Top Seven by Population",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot2", data, layout);