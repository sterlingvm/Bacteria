// Example API Call Syntax
const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then();

// DataFile Retrieval/Read Syntax
d3.json("samples.json").then(function(data){
    console.log(data);
});

// Extract specific content from json file
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// Extract specific content from json file & sort results (descending)
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

// Extract specific content from json file & sort results (descending) 
// & filter for null values
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

// Using Object.entries() to print key-values in an array
console.log(Object.entries("names"));

// Using forEach to print each key, value pair via iterations
researcher1.forEach(([first, second]) => console.log(first
    + ": " + second));

// Using everything together to print the metadata of any individual 
// from the samples.json dataset
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});