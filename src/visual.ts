module powerbi.extensibility.visual {
	export class Visual implements IVisual {
	  private svg: d3.Selection<SVGElement>;
	  private container: d3.Selection<SVGElement>;
	  private slider: d3.Selection<SVGElement>;
	  private g: d3.Selection<SVGElement>;

	  constructor(options: VisualConstructorOptions) {
			this.container= d3.select(options.element).append('div').style('padding','10px').classed('container',true);
			// this.container.select('div')
			// .append('div').classed('scrollingDiv',true);
			this.slider = d3.select('div.container').append('div').classed('slider', true);
			this.svg = d3.select('div.slider').append('svg');
			this.g = this.svg.append('g');
	  }

	  public update(options: VisualUpdateOptions) {
			var width = options.viewport.width,
		      height = options.viewport.height,
		      padding = 100;



		  d3.select('div.slider').attr({
				width: width*4
			})



		     
      var mindate = new Date(2016,10,1),
      		maxdate = new Date(2016,11,31);
            
      var xScale = d3.time.scale()
	      .domain([mindate, maxdate]) 
				.range([padding, width * 4 - padding]);

      var xAxis = d3.svg.axis()
        .orient("bottom")
        .scale(xScale)
        .ticks(d3.time.weeks)
        .tickSize(16, 2)

      this.svg.selectAll("*").remove();
      
	    this.svg.append("g")
        .attr("class", "xaxis")   
        .attr("transform", "translate(0," + (height - padding) + ")")
        .call(xAxis);


      this.svg.selectAll(".xaxis text")
        .attr("transform", function(d) {
            return "translate(" + this.getBBox().height*-2 + "," + this.getBBox().height + ")rotate(-45)";
      	});	  	

	  }

	  public destroy(): void {
	    //TODO: Perform any cleanup tasks here
	  }
	}
}