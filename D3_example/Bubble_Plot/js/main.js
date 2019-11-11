/*
*    main.js
 Gapminder Clone
*/

var margin = { left:80, right:20, top:50, bottom:100 };
var height = 500 - margin.top - margin.bottom,
    width = 800 - margin.left - margin.right;

var g = d3.select("#chart-area")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left +
            ", " + margin.top + ")");

var time = 0;

var colors = {
  "americas": "#5687d1",
  "africa": "#5c7b61",
  "asia": "#de783b",
  "europe": "#6ab975",
};

// 이것 해보는것 실습
var colorText = g.selectAll("text").data(d3.entries(colors))
  colorText.enter()
    .append("text")
    .attr("class", "colors")
    .attr("y", function(d,i){return height+40+ 15*i;})
    .attr("x", width-40)
    .attr("font-size", "20px")
    .style("fill",function(d){return d.value;})
    .style("opacity", "0.8")
    .style("text-anchor", "middle")
    .text(function(d){return d.key;});

// Scales
var x = d3.scaleLog()
    .range([0, width])
    .domain([142, 120000]);
var y = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 90]);
var area = d3.scaleLinear()
    .range([25*Math.PI, 1500*Math.PI])
    .domain([2000, 1400000000]);

// Labels
var xLabel = g.append("text")
    .attr("y", height + 50)
    .attr("x", width / 2)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("GDP Per Capita ($)");

var yLabel = g.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -40)
    .attr("x", -170)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("Life Expectancy (Years)")

var timeLabel = g.append("text")
    .attr("y", height -10)
    .attr("x", width - 40)
    .attr("font-size", "40px")
    .attr("opacity", "0.4")
    .attr("text-anchor", "middle")
    .text("1800");

// X Axis
var xAxisCall = d3.axisBottom(x)
    .tickValues([400, 4000, 40000])
    .tickFormat(d3.format("$"));
g.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height +")")
    .call(xAxisCall);

// Y Axis
var yAxisCall = d3.axisLeft(y)
    .tickFormat(function(d){ return +d; });
g.append("g")
    .attr("class", "y axis")
    .call(yAxisCall);


d3.json("data/data_full.json", function(data){
    console.log(data);

    // Clean data
    const formattedData = data.map(function(year){
        return year["countries"].map(function(country){
            return country;
        })
    });

    // Run the code every 0.1 second
    d3.interval(function(){
        // At the end of our data, loop back
        time = (time < 214) ? time+1 : 0
        update(formattedData[time]);
    }, 100)

    // First run of the visualization
    update(formattedData[0]);
})

function update(data) {
    // Standard transition time for the visualization
    var t = d3.transition()
        .duration(100)

    // JOIN new data with old elements.
    var circles = g.selectAll("circle").data(data, function(d){
        return d.country;
    });

    // EXIT old elements not present in new data.
    circles.exit()
        .remove();

    // ENTER new elements present in new data.
    circles.enter()
        .append("circle")
        .attr("class", "enter")
        .attr("fill", function(d) {return colors[d.continent]; })
        .merge(circles)
        .transition(t)
            .attr("cy", function(d){ return y(d.life_exp); })
            .attr("cx", function(d){ return x(d.income) })
            .attr("r", function(d){ return Math.sqrt(area(d.population) / Math.PI) });

    // Update the time label
    timeLabel.text(+(time + 1800))
}
