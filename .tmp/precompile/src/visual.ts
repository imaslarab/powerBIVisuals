module powerbi.extensibility.visual.PBI_CV_DB82D0E6_E5C1_4E34_884B_CAD22AFB245B  {
	
    function visualTransform(options: VisualUpdateOptions, host: IVisualHost): Date[] {
        let dataViews = options.dataViews;
        let viewModel: Date[];
       
        if (!dataViews
            || !dataViews[0]
            || !dataViews[0].categorical
            || !dataViews[0].categorical.categories
            || !dataViews[0].categorical.categories[0].source
            || !dataViews[0].categorical.values)
            return viewModel;
						
        let categorical = dataViews[0].categorical;
        let category = categorical.categories[0];
        let dataValue = categorical.values[0];
        let dataPoints: Date[] = [];
        var valueInString = category.values[1];
        // console.log(valueInString);
        for (let i = 0, len = Math.max(category.values.length); i < len; i++) {
            dataPoints.push(new Date(category.values[i].toString()));
        }

        return dataPoints;
    }

	export class Visual implements IVisual {
		private host: IVisualHost;

        private svg: d3.Selection<SVGElement>;
        private container: d3.Selection<SVGElement>;
        private slider: d3.Selection<SVGElement>;
        private g: d3.Selection<SVGElement>;

		private dates: Date[];

        constructor(options: VisualConstructorOptions) {
            this.host = options.host;
            this.container= d3.select(options.element).append('div').style("background", "red").classed('container',true);
            
            this.slider = d3.select('div.container').append('div').classed('slider', true);
            this.svg = d3.select('div.slider').append('svg');
            this.g = this.svg.append('g');
        }

        public update(options: VisualUpdateOptions) {

            let viewModel: Date[] = visualTransform(options, this.host);
            this.dates = viewModel;
           
            var width = options.viewport.width,
                height = options.viewport.height,
                padding = 100;

            d3.select('div.container').attr({
                width: width
            })

            d3.select('div.slider').attr({
                width: width
            })

            this.svg.attr({
                width: width
            })

            var maxdate=new Date(Math.max.apply(null,this.dates));
            var mindate=new Date(Math.min.apply(null,this.dates));
            
            // var mindate = new Date(2016,10,1),
            //     maxdate = new Date(2016,11,31);
                
            var xScale = d3.time.scale()
                .domain([mindate, maxdate]) 
                    .range([padding, width - padding]);

            var xAxis = d3.svg.axis()
            .orient("bottom")
            .scale(xScale)
            .ticks(d3.time.month)
            .tickFormat(d3.time.format("%b %y"))
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