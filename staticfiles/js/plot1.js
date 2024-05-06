// Load the data from the API endpoint
fetch("/api/load_data")
  .then(response => response.json()) // Parse the JSON response
  .then(function(data) {
    // Parse the data
    data.forEach(function(d) {
      d.age_groups = ['Child', 'Adolescent', 'Adult', 'Elderly'];
      d.values = [
        +d.cases_child,
        +d.cases_adolescent,
        +d.cases_adult,
        +d.cases_elderly
      ];
    });
    
// Set up the dimensions of the chart
var margin = {top: 120, right: 20, bottom: 40, left: 60},
    width = 400 - margin.left - margin.right, // Reduce width
    height = 400 - margin.top - margin.bottom; // Reduce height

// Append the SVG object to the .plot-container div
var svg = d3.select("body").append("svg") 
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // X scale
    var x = d3.scaleBand()
        .domain(data.map(function(d) { return d.age_groups; }))
        .range([0, width])
        .padding(0.1);
    
    svg.append("g")
        .attr("transform", "translate(0," + (height) + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
          .attr("transform", "rotate(-45)")
          .style("text-anchor", "end");
    
    // Y scale
    var y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) { return d3.max(d.values); })])
        .range([(height), 0]);  
    
    svg.append("g")
        .call(d3.axisLeft(y)); 
    
    // Bars
    svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return x(d.age_groups); })
    .attr("width", x.bandwidth())
    .attr("y", function(d) { 
        console.log("Height of bar for " + d.age_groups + ": " + y(d.values[0])); // Log the height of each bar
        return y(d.values[0]); 
    })
    .attr("height", function(d) { 
        console.log("Value for " + d.age_groups + ": " + d.values[0]); // Log the value for each bar
        return height - y(d.values[0]); 
    });
    
    // Add chart title
    svg.append("text")
        .attr("x", (width / 2))
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("text-decoration", "underline")
        .text("Distribution of COVID-19 Cases Across Age Groups");
    
    // Add x-axis label
    svg.append("text")
        .attr("transform",
              "translate(" + (width / 2) + " ," +
                             (height + 30) + ")")
        .style("text-anchor", "middle")
        .text("Age Groups");
    
    // Add y-axis label
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", - 30)
        .attr("x", 0 - (height / 2) )
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Number of Cases");
  })
  .catch(function(error) {
    console.error('Error fetching data:', error);
  });
