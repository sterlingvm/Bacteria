// Plotly Line-Plot
Plotly.newPlot("plotLine", [{x: [1, 2, 3, 4, 5, 6, 7, 8, 9], y: [8, 23, 37, 80*2, 6**3, 4905/8, 689%23, 0.1, 394]}]);

// Plotly BarChart w/ Layout
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    // declaring chart/graph type
    type: "bar"
 };

 var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
 };
 // [trace] is placing the graph data into an array
Plotly.newPlot("plotBar", [trace], layout);

// Plotly BarChart 2 w/ More Complexity
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    // declaring chart/graph type
    type: "bar"
   };
   // data is now a callable variable that 
   // represents the trace array
   var data = [trace];
   var layout = {
    title: "Drinks Popularity BarChart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
   };
Plotly.newPlot("plotBar2", data, layout);

// Plotly PieChart
var trace = {
    // Pie Chart x & y must be labeled something else 
    // as a pie chart does not have an x or y axis
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
  };
  var data = [trace];
  var layout = {
    title: "Drinks PieChart",
  };
Plotly.newPlot("plotPie", data, layout);