// Plotly Documentation URL: https://plot.ly/javascript/basic-charts/

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

// Plotly ScatterPlot
var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
  };
  
  var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter'
  };
  
  var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter'
  };
  
  // plotting multiple trends into one graph looks like this
  var data = [trace1, trace2, trace3];
  
  Plotly.newPlot('plotScatter', data);


  // Plotly Bubble Chart
  var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 11, 12, 13],
    mode: 'markers',
    marker: {
      size: [40, 60, 80, 100]
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'Marker Size',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('plotBubble', data, layout);

// Plotly Sunburst Chart
var data = [{
    type: "sunburst",
    labels: ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
    parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ],
    values:  [10, 14, 12, 10, 2, 6, 6, 4, 4],
    outsidetextfont: {size: 20, color: "#377eb8"},
    leaf: {opacity: 0.4},
    marker: {line: {width: 2}},
  }];
  
  var layout = {
    margin: {l: 0, r: 0, b: 0, t: 0},
    width: 500,
    height: 500
  };
  
  
  Plotly.newPlot('plotSunburst', data, layout);

  // Plotly Sankey Diagram
  var data = {
    type: "sankey",
    orientation: "h",
    node: {
      pad: 15,
      thickness: 30,
      line: {
        color: "black",
        width: 0.5
      },
     label: ["A1", "A2", "B1", "B2", "C1", "C2"],
     color: ["blue", "blue", "blue", "blue", "blue", "blue"]
        },
  
    link: {
      source: [0,1,0,2,3,3],
      target: [2,3,3,4,4,5],
      value:  [8,4,2,8,4,2]
    }
  }
  
  var data = [data]
  
  var layout = {
    title: "Basic Sankey",
    font: {
      size: 10
    }
  }
  
  Plotly.react('plotSankey', data, layout)

// Plotly Tables
var values = [
    ['Salaries', 'Office', 'Merchandise', 'Legal', '<b>TOTAL</b>'],
    [1200000, 20000, 80000, 2000, 12120000],
    [1300000, 20000, 70000, 2000, 130902000],
    [1300000, 20000, 120000, 2000, 131222000],
    [1400000, 20000, 90000, 2000, 14102000]]

var data = [{
type: 'table',
header: {
  values: [["<b>EXPENSES</b>"], ["<b>Q1</b>"],
               ["<b>Q2</b>"], ["<b>Q3</b>"], ["<b>Q4</b>"]],
  align: "center",
  line: {width: 1, color: 'black'},
  fill: {color: "grey"},
  font: {family: "Arial", size: 12, color: "white"}
},
cells: {
  values: values,
  align: "center",
  line: {color: "black", width: 1},
  font: {family: "Arial", size: 11, color: ["black"]}
}
}]

Plotly.newPlot('plotTable', data);

// Plotly Gauges
var data = [
	{
		domain: { x: [0, 1], y: [0, 1] },
		value: 270,
		title: { text: "Speed" },
		type: "indicator",
		mode: "gauge+number"
	}
];

var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
Plotly.newPlot('myDiv', data, layout);