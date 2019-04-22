var data = [1, 2, 3, 4, 2, 1.5, 6, 8, 5, 9, 11, 3];
var svg = d3.select("body").append("svg")
  .attr('height', '100%')
  .attr('width', '100%');

//select all rectangles in svg
// then append data to rect: that is how they are created
svg.selectAll('rect')
  .data(data)
  .enter().append('rect')
    .attr('height',function(d,i) {return d*20})
    .attr('width','20')
    .attr('x',function(d,i) {return 24*i })
    .attr('y',function(d,i) {return 200 - d*20});

svg.selectAll('circle')
  .data(data)
  .enter().append('circle')
    .attr('class', 'groups')
    .attr('cx', function(d,i) {return 300+i*30})
    .attr('cy', function(d,i) {return 200-d*10})
    .attr('r', function(d,i) {return d*1.2})
