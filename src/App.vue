<template>
<div>
 <div id="app">
    <div class="form">
      <div id=title>
        {{title}}
        </div>
   </div>
</div>

<router-view></router-view>
</div>
</template>
<script>
import * as d3 from "d3";
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return { 
    jsonurl:"https://raw.githubusercontent.com/FWcloud916/TWcity/master/taiwan.json",
		geojson:[],
		width:650,
		height:650,
		center:[121,24],
		title:"臺灣",
    }
  },
  mounted: function(){
    this.getGeoJson();
	},
	methods:{
		getGeoJson: function(){
      let vm =this;
			axios.get(this.jsonurl)
			.then(function(response){
        vm.geojson = response.data
        console.log(vm.geojson)
        console.log("app.geojson.features");
        vm.drawMap();
      })
		},
		
		drawMap:function(){
			var svg = d3.select("#app").append("svg")
				.attr("width", this.width)
				.attr("height", this.height);
			var g = svg.append("g");
			var projection = d3.geoMercator()
				.center(this.center)
				.scale(10000)

			var path = d3.geoPath()
        .projection(projection);
      let vm = this;
      var color = d3.scaleOrdinal()
      .range(['black', 'red', 'pink','yellow']);
			var map = d3.select("g").selectAll("path")
				.data(this.geojson.features)
				.enter()
				.append("path")
				.attr("d", path)
				.attr('stroke','black')
				.attr('stroke-width', "1")
				.attr('fill','#184200')
				.on("mouseover", function(d,i) {
					d3.select(this).attr("fill", color(i));
					vm.title = d.properties['COUNTYNAME']
				})
				.on("mouseleave", function(d) {
					d3.select(this).attr("fill", "#184200");
					vm.title = "臺灣"
				});
		}
}
}


</script>

<style>
*{
	padding:10px
}
#app{
	background-color:#4286f4;
}

.form{
	width:8em;
	text-align:right;
	background-color:#ededed;
	border-color:#162844;
	border-width:5px;
	border-style:solid;
	border-radius: 50px 5px 5px 5px ;
}
#title{
	color:#162844;
	font-family: '微軟正黑體';
	font-size:2em;
	font-weight:bold;
}
</style>
