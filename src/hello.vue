<template>
 <div id="hello">
 
</div>
</template>

<script>
import * as d3 from "d3";
export default {
  name: 'app',
  data () {
    return { 
      map:[
	{
		name:"圈圈1"
	},
	
	{
		name:"圈圈2"
	},
	
	{
		name:"圈圈3"
	},
	
	{
		name:"圈圈4"
	},
	
	{
		name:"圈圈5"
	},
	
	{
		name:"圈圈6"
	},
	
	{
		name:"圈圈7"
	},
	
	{
		name:"圈圈8"
	},
	
	{
		name:"圈圈9"
	},
	
	{
		name:"圈圈10"
	},
	
	{
		name:"圈圈11"
	},
	
	{
		name:"圈圈12"
	},
	
	{
		name:"圈圈13"
	},
	
	{
		name:"圈圈14"
	},
	
	{
		name:"圈圈15"
	},
	
	{
		name:"圈圈16"
	},
	
	{
		name:"圈圈17"
	},
	
	{
		name:"圈圈18"
	},
	
	{
		name:"圈圈19"
	},
],
links:[
	{	
		source:0,
	 	target:1
	},
	{	
		source:0,
	 	target:6
	},
	{	
		source:1,
	 	target:2
	},
	{	
		source:1,
	 	target:16
	},
	{	
		source:2,
	 	target:9
	},
	{	
		source:2,
	 	target:16
	},
	{	
		source:3,
	 	target:9
	},
	{	
		source:3,
	 	target:10
	},
	{	
		source:3,
	 	target:11
	},
	{	
		source:3,
	 	target:12
	},
	{	
		source:3,
	 	target:16
	},
	{	
		source:3,
	 	target:17
	},
	{	
		source:4,
	 	target:5
	},
	{	
		source:4,
	 	target:14
	},
	{	
		source:5,
	 	target:12
	},
	{	
		source:5,
	 	target:14
	},
	{	
		source:5,
	 	target:15
	},
	{	
		source:5,
	 	target:17
	},
	{	
		source:5,
	 	target:18
	},
	{	
		source:7,
	 	target:10
	},
	{	
		source:7,
	 	target:11
	},
	{	
		source:8,
	 	target:14
	},
	{	
		source:9,
	 	target:10
	},
	{	
		source:9,
	 	target:16
	},
	{	
		source:11,
	 	target:12
	},
	{	
		source:11,
	 	target:13
	},
	{	
		source:12,
	 	target:13
	},
	{	
		source:12,
	 	target:14
	},
	{	
		source:12,
	 	target:17
	},
	{
		source:13,
		target:14
	},
	{	
		source:15,
	 	target:18
	},
	{	
		source:16,
	 	target:17
	},
	{	
		source:17,
	 	target:18
	},
],
  width: 800,
 height: 800
      }
    
  },
  mounted(){
    let vm =this;
    vm.nodelink();
  },
  methods:{
nodelink(){
  console.log(this.map)
var color = d3.scaleOrdinal()
    .range(['black', 'red', 'pink','yellow']);

var svg = d3.select("#hello").append("svg")
    .attr("width", this.width)
    .attr("height", this.height)

var simulation = d3.forceSimulation()
	.force("link", d3.forceLink())
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(this.width / 2, this.height / 2));

var link = svg.append("g")
	.attr("class", "links")
	.selectAll("line")
	.data(this.links)
	.enter().append("line")
	.attr("stroke-width", 2)
	.attr("stroke","black");

var node = svg.append("g")
	.attr("class", "nodes")
	.selectAll("circle")
	.data(this.map)
	.enter().append("circle")
	.attr("r", 8)
	.attr("fill", function(d,i) { return color(i); })
	.attr('stroke','white')
	.attr('stroke-width',2)
	.call(d3.drag()
		.on("start", dragstarted)
		.on("drag", dragged)
		.on("end", dragended));

var text = svg.selectAll("text")
     .data(this.map)
     .enter()
     .append("text")
     .style("fill", "black")
     .attr("dx", 12)
     .attr("dy", 5)
     .text(function(d){
        return d.name;
     });

simulation
	.nodes(this.map)
	.on("tick", ticked);

simulation.force("link")
	.links(this.links)
	.distance(50);

simulation.force("charge")
	.strength(-60)
function ticked() {
link
	.attr("x1", function(d) { return d.source.x; })
	.attr("y1", function(d) { return d.source.y; })
	.attr("x2", function(d) { return d.target.x; })
	.attr("y2", function(d) { return d.target.y; });

node
	.attr("cx", function(d) { return d.x; })
	.attr("cy", function(d) { return d.y; });

text
	.attr("x", function(d) { return d.x;})
	.attr("y", function(d) { return d.y;});
};

function dragstarted(d) {
if (!d3.event.active) simulation.alphaTarget(0.3).restart();
d.fx = d.x;
d.fy = d.y;
}

function dragged(d) {
d.fx = d3.event.x;
d.fy = d3.event.y;
}

function dragended(d) {
if (!d3.event.active) simulation.alphaTarget(0);
d.fx = null;
d.fy = null;
}
}

  }
}
</script>

<style>

</style>
