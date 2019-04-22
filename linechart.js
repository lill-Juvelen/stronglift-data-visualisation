var parseTime = d3.timeParse("%d-%b-%y");

// define width and height for chart
var margin = {top: 20, right: 50, bottom: 30, left: 50},
width = 1200 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

var x = d3.scaleTime().range([0,width]);
var y = d3.scaleLinear().range([height,0]);

var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

var svg2 = d3.select("div").append(svg)
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

// get data
//var data = d3.csv("data/test2-data.csv", function(d,error) {
//if (error) throw error;
  //format data
//  data.forEach(function(d) {
//    d.letter = parseTime(d.date);
//    d.kg = +d.kg;
//  })
//});

//var data = d3.csv("https://github.com/lill-Juvelen/personal-data/blob/master/test-data.csv", function(data) {
//  console.log(data[0]);
//});

//var data = [
//  {date: "01/05/12", frequency: 20},
//  {date: "02/05/12", frequency: 22.5},
//  {date: "03/05/12", frequency: 40},
//  {date: "04/05/12", frequency: 42},
//  {date: "06/05/12", frequency: 45},
//  {date: "07/05/12", frequency: 47.5},
//  {date: "13/05/12", frequency: 48},
//  {date: "03/06/12", frequency: 45},
//  {date: "05/06/12", frequency: 50}
//];
// gridlines in x axis function
function make_x_gridlines() {
return d3.axisBottom(x)
.ticks(5)
}
// gridlines in y axis function
function make_y_gridlines() {
return d3.axisLeft(y)
.ticks(5)
}

var datat = [
  {date:"8-Oct-12",kg:20},
  {date:"10-Oct-12",kg:20},
  {date:"12-Oct-12",kg:20},
  {date:"15-Oct-12",kg:20},
  {date:"17-Oct-12",kg:22.5},
  {date:"19-Oct-12",kg:25},
  {date:"22-Oct-12",kg:27.5},
  {date:"24-Oct-12",kg:30},
  {date:"29-Oct-12",kg:30},
  {date:"31-Oct-12",kg:32.5},
  {date:"2-Nov-12",kg:40},
  {date:"5-Nov-12",kg:40},
  {date:"7-Nov-12",kg:42.5},
  {date:"9-Nov-12",kg:42.5},
  {date:"19-Nov-12",kg:35},
  {date:"21-Nov-12",kg:37.5},
  {date:"23-Nov-12",kg:40}];


  var data = [{date:"8-Oct-12",kg:20,note:"", bw: 58},
  {date:"10-Oct-12",kg:20,note:"", bw: 58},
  {date:"12-Oct-12",kg:20,note:"", bw: 58},
  {date:"15-Oct-12",kg:20,note:"", bw: 58},
  {date:"17-Oct-12",kg:22.5,note:"", bw: 58},
  {date:"19-Oct-12",kg:25,note:"", bw: 58},
  {date:"22-Oct-12",kg:27.5,note:"", bw: 58},
  {date:"24-Oct-12",kg:30,note:"", bw: 58},
  {date:"29-Oct-12",kg:30,note:"", bw: 58},
  {date:"31-Oct-12",kg:32.5,note:"", bw: 58},
  {date:"2-Nov-12",kg:40,note:"", bw: 57.5},
  {date:"5-Nov-12",kg:40,note:"", bw: 57.5},
  {date:"7-Nov-12",kg:42.5,note:"", bw: 58},
  {date:"9-Nov-12",kg:42.5,note:"", bw: 58},
  {date:"19-Nov-12",kg:35,note:"", bw: 57.5},
  {date:"21-Nov-12",kg:37.5,note:"", bw: 58},
  {date:"23-Nov-12",kg:40,note:"", bw: 58},
  {date:"26-Nov-12",kg:42.4,note:"", bw: 58},
  {date:"28-Nov-12",kg:45,note:"", bw: 58},
  {date:"3-Dec-12",kg:42.4,note:"", bw: 58},
  {date:"5-Dec-12",kg:45,note:"", bw: 58},
  {date:"7-Dec-12",kg:47.5,note:"", bw: 58},
  {date:"12-Dec-12",kg:50,note:"", bw: 58},
  {date:"17-Dec-12",kg:52.5,note:"", bw: 58},
  {date:"19-Dec-12",kg:55,note:"", bw: 58},
  {date:"25-Dec-12",kg:50,note:"", bw: 58},
  {date:"28-Dec-12",kg:50,note:"", bw: 58},
  {date:"3-Jan-13",kg:50,note:"", bw: 58},
  {date:"7-Jan-13",kg:52.5,note:"", bw: 59},
  {date:"14-Jan-13",kg:45,note:"", bw: 59},
  {date:"16-Jan-13",kg:47.5,note:"", bw: 59},
  {date:"18-Jan-13",kg:50,note:"", bw: 59},
  {date:"26-Jan-13",kg:45,note:"", bw: 59},
  {date:"28-Jan-13",kg:47.5,note:"", bw: 59},
  {date:"30-Jan-13",kg:50,note:"", bw: 59},
  {date:"6-Feb-13",kg:50,note:"", bw: 59},
  {date:"8-Feb-13",kg:52.5,note:"", bw: 59},
  {date:"11-Feb-13",kg:55,note:"", bw: 60},
  {date:"13-Feb-13",kg:55,note:"",bw: 60},
  {date:"15-Feb-13",kg:55,note:"",bw: 60},
  {date:"18-Feb-13",kg:57.5,note:"", bw: 60},
  {date:"20-Feb-13",kg:57.5,note:"",bw: 60},
  {date:"28-Feb-13",kg:50,note:"",bw: 60},
  {date:"4-Mar-13",kg:50,note:"",bw: 59},
  {date:"6-Mar-13",kg:50,note:"",bw:59},
  {date:"8-Mar-13",kg:52.5,note:"",bw: 59},
  {date:"11-Mar-13",kg:55,note:"",bw: 60},
  {date:"13-Mar-13",kg:57.5,note:"",bw: 59},
  {date:"18-Mar-13",kg:50,note:"",bw: 59},
  {date:"20-Mar-13",kg:52.5,note:"",bw: 59},
  {date:"23-Mar-13",kg:55,note:"",bw: 59},
  {date:"27-Mar-13",kg:57.5,note:"", bw: 58},
  {date:"1-Apr-13",kg:57.5,note:"", bw: 58},
  {date:"3-Apr-13",kg:60,note:"", bw: 59},
  {date:"8-Apr-13",kg:60,note:"",bw: 58},
  {date:"10-Apr-13",kg:60,note:"",bw: 59},
  {date:"12-Apr-13",kg:55,note:"",bw: 59},
  {date:"17-Apr-13",kg:57.5,note:"",bw: 59},
  {date:"19-Apr-13",kg:60,note:"",bw: 59},
  {date:"22-Apr-13",kg:60,note:"",bw: 59},
  {date:"24-Apr-13",kg:62.5,note:"",bw: 58},
  {date:"6-May-13",kg:55,note:"",bw: 58},
  {date:"8-May-13",kg:57.5,note:"",bw: 58},
  {date:"10-May-13",kg:60,note:"",bw: 59},
  {date:"13-May-13",kg:62.5,note:"", bw: 59},
  {date:"15-May-13",kg:62.5,note:"", bw: 59},
  {date:"16-May-13",kg:65,note:"", bw: 59},
  {date:"22-May-13",kg:60,note:"", bw: 58},
  {date:"24-May-13",kg:60,note:"", bw: 58},
  {date:"2-Jun-13",kg:62.5,note:"", bw: 58},
  {date:"5-Jun-13",kg:62.5,note:"", bw: 57.5},
  {date:"8-Jul-13",kg:45,note:"", bw: 57},
  {date:"10-Jul-13",kg:50,note:"", bw: 57},
  {date:"12-Jul-13",kg:52.5,note:"",bw: 58},
  {date:"15-Jul-13",kg:55,note:"", bw: 58},
  {date:"17-Jul-13",kg:57.5,note:"",bw: 58},
  {date:"22-Jul-13",kg:60,note:"",bw: 59},
  {date:"24-Jul-13",kg:62.5,note:"",bw: 59},
  {date:"26-Jul-13",kg:65,note:"",bw: 59},
  {date:"30-Jul-13",kg:65,note:"",bw: 59},
  {date:"2-Aug-13",kg:65,note:"",bw: 58},
  {date:"5-Aug-13",kg:60,note:"",bw: 58},{date:"7-Aug-13",kg:62.5,note:""},{date:"9-Aug-13",kg:65,note:""},{date:"12-Aug-13",kg:60,note:""},{date:"14-Aug-13",kg:62.5,note:""},{date:"16-Aug-13",kg:65,note:""},{date:"19-Aug-13",kg:60,note:""},{date:"27-Aug-13",kg:65,note:""},{date:"16-Sep-13",kg:60,note:""},{date:"18-Sep-13",kg:62.5,note:""},{date:"20-Sep-13",kg:65,note:""},{date:"23-Sep-13",kg:67.5,note:""},{date:"25-Sep-13",kg:67.5,note:""},{date:"27-Sep-13",kg:70,note:""},{date:"30-Sep-13",kg:70,note:""},{date:"2-Oct-13",kg:72.5,note:""},{date:"3-Oct-13",kg:65,note:""},{date:"7-Oct-13",kg:67.5,note:""},{date:"9-Oct-13",kg:70,note:""},{date:"11-Oct-13",kg:72.5,note:""},{date:"14-Oct-13",kg:72.5,note:""},{date:"16-Oct-13",kg:72.5,note:""},{date:"18-Oct-13",kg:70,note:""},{date:"21-Oct-13",kg:72.5,note:""},{date:"23-Oct-13",kg:75,note:""},{date:"25-Oct-13",kg:75,note:""},{date:"28-Oct-13",kg:75,note:""},{date:"31-Oct-13",kg:72.5,note:""},{date:"4-Nov-13",kg:75,note:""},{date:"6-Nov-13",kg:75,note:""},{date:"12-Nov-13",kg:70,note:""},{date:"15-Nov-13",kg:70,note:""},{date:"18-Nov-13",kg:72.5,note:""},{date:"20-Nov-13",kg:72.5,note:""},{date:"22-Nov-13",kg:70,note:""},{date:"25-Nov-13",kg:70,note:""},{date:"27-Nov-13",kg:72.5,note:""},{date:"29-Nov-13",kg:75,note:""},{date:"2-Dec-13",kg:77.5,note:""},{date:"4-Dec-13",kg:77.5,note:""},{date:"6-Dec-13",kg:77.5,note:""},{date:"9-Dec-13",kg:70,note:""},{date:"16-Dec-13",kg:65,note:"åkte hem från norge"},{date:"18-Dec-13",kg:65,note:""},{date:"20-Dec-13",kg:67.5,note:"åkte till indien"},{date:"23-Dec-13",kg:70,note:""},{date:"4-Apr-14",kg:40,note:""},{date:"7-Apr-14",kg:42.5,note:""},
  {date:"9-Apr-14",kg:45,note:""},
  {date:"11-Apr-14",kg:47.5,note:""},
  {date:"14-Apr-14",kg:50,note:"gjorde slut med carl"},
  {date:"16-Apr-14",kg:50,note:""},
  {date:"18-Apr-14",kg:50,note:""},
  {date:"21-Apr-14",kg:52.5,note:""},{date:"23-Apr-14",kg:55,note:""},{date:"25-Apr-14",kg:57.5,note:""},{date:"28-Apr-14",kg:60,note:""},{date:"5-May-14",kg:55,note:""},{date:"7-May-14",kg:57.5,note:""},{date:"9-May-14",kg:60,note:""},{date:"11-May-14",kg:60,note:""},{date:"12-May-14",kg:62.5,note:""},{date:"14-May-14",kg:65,note:""},{date:"16-May-14",kg:65,note:""},{date:"19-May-14",kg:65,note:""},{date:"21-May-14",kg:60,note:""},{date:"23-May-14",kg:62.5,note:""},{date:"26-May-14",kg:65,note:""},{date:"28-May-14",kg:67.5,note:""},{date:"30-May-14",kg:67.5,note:""},{date:"1-Jun-14",kg:60,note:""},{date:"2-Jun-14",kg:60,note:""},{date:"4-Jun-14",kg:62.5,note:""},{date:"6-Jun-14",kg:65,note:""},{date:"9-Jun-14",kg:67.5,note:""},{date:"11-Jun-14",kg:67.5,note:""},{date:"13-Jun-14",kg:70,note:""},{date:"17-Jun-14",kg:65,note:""},{date:"19-Jun-14",kg:67.5,note:""},{date:"23-Jun-14",kg:70,note:""},{date:"27-Jun-14",kg:72.5,note:""},{date:"1-Jul-14",kg:75,note:""},{date:"4-Jul-14",kg:77.5,note:""},{date:"7-Jul-14",kg:77.5,note:""},{date:"10-Jul-14",kg:75,note:""},{date:"14-Jul-14",kg:77.5,note:""},{date:"16-Jul-14",kg:80,note:""},{date:"18-Jul-14",kg:80,note:""},{date:"21-Jul-14",kg:77.5,note:""},{date:"23-Jul-14",kg:80,note:""},{date:"26-Jul-14",kg:82.5,note:""},
  {date:"11-Aug-14",kg:65,note:""},
  {date:"13-Aug-14",kg:67.5,note:""},
  {date:"15-Aug-14",kg:70,note:""},
  {date:"18-Aug-14",kg:72.5,note:""},
  {date:"20-Aug-14",kg:75,note:""},
  {date:"22-Aug-14",kg:77.5,note:""},
  {date:"26-Aug-14",kg:80,note:""},
  {date:"28-Aug-14",kg:82.5,note:""},
  {date:"30-Aug-14",kg:85,note:""},
  {date:"2-Sep-14",kg:60,note:""},
  {date:"3-Sep-14",kg:40,note:""},{date:"5-Sep-14",kg:40,note:""},{date:"7-Sep-14",kg:20,note:"skadade mig"},{date:"9-Sep-14",kg:25,note:""},{date:"11-Sep-14",kg:25,note:""},{date:"13-Sep-14",kg:25,note:""},{date:"16-Sep-14",kg:30,note:""},{date:"18-Sep-14",kg:30,note:""},{date:"20-Sep-14",kg:30,note:""},{date:"22-Sep-14",kg:30,note:""},{date:"24-Sep-14",kg:30,note:""},{date:"26-Sep-14",kg:30,note:""},{date:"30-Sep-14",kg:30,note:""},{date:"2-Oct-14",kg:30,note:""},{date:"7-Oct-14",kg:30,note:""},{date:"9-Oct-14",kg:32.5,note:""},{date:"11-Oct-14",kg:35,note:""},{date:"13-Oct-14",kg:35,note:""},{date:"15-Oct-14",kg:35,note:""},{date:"17-Oct-14",kg:37.4,note:""},{date:"20-Oct-14",kg:40,note:""},{date:"22-Oct-14",kg:30,note:""},{date:"23-Oct-14",kg:32.5,note:""},{date:"25-Oct-14",kg:30,note:""},{date:"1-Nov-14",kg:30,note:""},{date:"3-Nov-14",kg:30,note:""},{date:"5-Nov-14",kg:32.5,note:""},{date:"7-Nov-14",kg:35,note:"lost interest"},{date:"12-Nov-14",kg:35,note:""},
  {date:"14-Nov-14",kg:37.5,note:""},
  {date:"16-Nov-14",kg:40,note:""},
  {date:"18-Nov-14",kg:20,note:""},
  {date:"22-Nov-14",kg:20,note:""},
  {date:"24-Nov-14",kg:25,note:""},
  {date:"29-Nov-14",kg:25,note:"ont igen"},
  {date:"1-Dec-14",kg:20,note:""},
  {date:"6-Dec-14",kg:20,note:""},
  {date:"9-Dec-14",kg:20,note:""},
  {date:"13-Dec-14",kg:20,note:""},
  {date:"17-Dec-14",kg:20,note:""},
  {date:"4-Jan-15",kg:20,note:""},
  {date:"6-Jan-15",kg:20,note:""},
  {date:"8-Jan-15",kg:20,note:""},
  {date:"13-Jan-15",kg:20,note:""},
  {date:"17-Jan-15",kg:25,note:""},
  {date:"20-Jan-15",kg:25,note:""},
  {date:"22-Jan-15",kg:27.5,note:""},
  {date:"25-Jan-15",kg:27.5,note:""},
  {date:"28-Jan-15",kg:27.5,note:""},
  {date:"3-Feb-15",kg:30,note:""},
  {date:"10-Feb-15",kg:20,note:""},
  {date:"13-Feb-15",kg:20,note:""},
  {date:"15-Feb-15",kg:20,note:""},
  {date:"17-Feb-15",kg:20,note:""},
  {date:"18-Feb-15",kg:20,note:""},
  {date:"21-Feb-15",kg:20,note:""},
  {date:"25-Feb-15",kg:20,note:""},
  {date:"28-Feb-15",kg:22.5,note:""},
  {date:"2-Mar-15",kg:22.5,note:""},
  {date:"4-Mar-15",kg:22.5,note:""},
  {date:"6-Mar-15",kg:22.5,note:""},
  {date:"9-Mar-15",kg:22.5,note:""},
  {date:"11-Mar-15",kg:22.5,note:""},
  {date:"13-Mar-15",kg:25,note:""},
  {date:"16-Mar-15",kg:25,note:""},
  {date:"18-Mar-15",kg:25,note:""},
  {date:"20-Mar-15",kg:25,note:""},
  {date:"23-Mar-15",kg:27.5,note:""},
  {date:"25-Mar-15",kg:27.5,note:""},
  {date:"27-Mar-15",kg:30,note:""},
  {date:"30-Mar-15",kg:30,note:""},
  {date:"1-Apr-15",kg:30,note:""},
  {date:"3-Apr-15",kg:30,note:""},
  {date:"6-Apr-15",kg:30,note:""},
  {date:"8-Apr-15",kg:30,note:""},
  {date:"16-Apr-15",kg:30,note:""},
  {date:"21-Apr-15",kg:30,note:""},
  {date:"27-Apr-15",kg:32.5,note:""},
  {date:"3-May-15",kg:32.5,note:""},
  {date:"6-May-15",kg:32.5,note:""},
  {date:"12-May-15",kg:32.5,note:""},
  {date:"15-May-15",kg:35,note:""},
  {date:"19-May-15",kg:35,note:""},
  {date:"26-May-15",kg:35,note:""},
  {date:"28-May-15",kg:35,note:""},
  {date:"30-May-15",kg:35,note:""},
  {date:"1-Jun-15",kg:37.5,note:""},
  {date:"2-Jun-15",kg:37.5,note:""},
  {date:"4-Jun-15",kg:40,note:""},
  {date:"5-Jun-15",kg:40,note:""},
  {date:"7-Jun-15",kg:40,note:""},
  {date:"9-Jun-15",kg:40,note:""},
  {date:"15-Jun-15",kg:40,note:""},
  {date:"16-Jun-15",kg:42.5,note:""},
  {date:"17-Jun-15",kg:42.5,note:""},
  {date:"19-Jun-15",kg:45,note:""},
  {date:"21-Jun-15",kg:45,note:""},
  {date:"24-Jun-15",kg:45,note:""},
  {date:"27-Jun-15",kg:50,note:""},
  {date:"29-Jun-15",kg:50,note:""},
  {date:"30-Jun-15",kg:50,note:""},
  {date:"1-Jul-15",kg:52.5,note:""},
  {date:"3-Jul-15",kg:52.5,note:""},
  {date:"6-Jul-15",kg:55,note:""},







]

var parseTime = d3.timeParse("%d-%b-%y");

var x_axis = d3.axisBottom(x);
var y_axis = d3.axisBottom(y);

x.domain(d3.extent(data, function(d) { return parseTime(d.date); }));
y.domain([0, d3.max(data, function(d) { return d.kg; })]);

var myLine = d3.line()
          .curve(d3.curveMonotoneX)
          .x(function(d) { return x(parseTime(d.date)); })
          .y(function(d) { return y(d.kg); });

  svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", myLine(data));

      // add the X gridlines
      svg.append("g")
      .attr("class", "grid")
      .attr("transform", "translate(0," + height + ")")
      .call(make_x_gridlines()
      .tickSize(-height)
      .tickFormat("")
      )
      // add the Y gridlines
      svg.append("g")
      .attr("class", "grid")
      .call(make_y_gridlines()
      .tickSize(-width)
      .tickFormat("")
      )

  // Add the X Axiss
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .style("font-size", "16px");
  svg.append("text")
      .attr("x", width/2 )
      .attr("y", height + 100 )
      .style("text-anchor", "middle")
      .text("Date");


  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y))
          .style("font-size", "16px");
  svg.append("text")
  .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .style("font-size", "16px")
    .style("font-family", "helvetica")
    .text("Kg");

//scatter
// set thme at data points


  svg.selectAll("dot")
           .data(data)
         .enter().append("circle")
          .attr("fill", "red")
           .attr("r", 1.5)
           .attr("cx", function(d) { return x(parseTime(d.date)); })
           .attr("cy", function(d) { return y(d.kg); })
           .on("mouseover", function(d) {
             div.transition()
               .duration(200)
               .style("opacity", .9);
             div.html(formatTime(d.date) + "<br/>" + d.kg)
               .style("left", (d3.event.pageX) + "px")
               .style("top", (d3.event.pageY - 28) + "px");
             })
           .on("mouseout", function(d) {
             div.transition()
               .duration(500)
               .style("opacity", 0);
             });
