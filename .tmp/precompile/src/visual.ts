module powerbi.extensibility.visual.PBI_CV_DB82D0E6_E5C1_4E34_884B_CAD22AFB245B  {
	export class Visual implements IVisual {
	  private svg: d3.Selection<SVGElement>;
	  private g: d3.Selection<SVGElement>;

	  constructor(options: VisualConstructorOptions) {
			this.svg = d3.select(options.element).append('svg');
			this.g = this.svg.append('g');
	  }

	  public update(options: VisualUpdateOptions) {
			var _this = this;
			var width = 700,
		      height = 400,
		      padding = 100;

			_this.svg.attr({
				height: height,
				width: width
			});
		    
      var mindate = new Date(2016,0,1),
      		maxdate = new Date(2016,0,31);
            
      var xScale = d3.time.scale()
	      .domain([mindate, maxdate]) 
				.range([padding, width - padding]);

      var xAxis = d3.svg.axis()
        .orient("bottom")
        .scale(xScale)
        .ticks(5);

	    _this.svg.append("g")
        .attr("class", "xaxis")   
        .attr("transform", "translate(0," + (height - padding) + ")")
        .call(xAxis);
       
      _this.svg.selectAll(".xaxis text")
        .attr("transform", function(d) {
            return "translate(" + this.getBBox().height*-2 + "," + this.getBBox().height + ")rotate(-45)";
      	});	

	  }

	  public destroy(): void {
	    //TODO: Perform any cleanup tasks here
	  }
	}
}