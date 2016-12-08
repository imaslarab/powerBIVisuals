module powerbi.extensibility.visual {
	interface TimelineViewModel {
        dataPoints: TimelineDataPoint[];
        minDate: Date;
        maxDate: Date;
        // settings: TimelineSettings;
    }
    interface TimelineDataPoint {
        title: string;
        date: Date;
        // color: string;
        // selectionId: ISelectionId;
    };

    function visualTransform(options: VisualUpdateOptions, host: IVisualHost): TimelineViewModel {
        let dataViews = options.dataViews;
        let viewModel: TimelineViewModel = {
            dataPoints: [],
            minDate: null,
            maxDate: null
            // settings: <TimelineSettings>{}
        };
       
        if (!dataViews
            || !dataViews[0]
            || !dataViews[0].categorical
            || !dataViews[0].categorical.categories
            || !dataViews[0].categorical.categories[0].source
            || !dataViews[0].categorical.values)
            return viewModel;
						
        let categorical = dataViews[0].categorical;
        let category = categorical.categories[0];
        let title = categorical.categories[1];
        let dataValue = categorical.values[0];

        let timelineDataPoints: TimelineDataPoint[] = [];
       
        for (let i in category.values) {
            timelineDataPoints.push({
                title: String(title.values[i]),
                date: new Date(category.values[i].toString())
            });
        }
        
        let dates = timelineDataPoints.map(function(obj){
            return obj.date;
        });
        let maxdate = new Date(Math.max.apply(null,dates));
        let mindate = new Date(Math.min.apply(null,dates));
        return {
            dataPoints: timelineDataPoints,
            maxDate: maxdate,
            minDate: mindate
        };
    }

	export class Visual implements IVisual {
		private host: IVisualHost;

        private svg: d3.Selection<SVGElement>;
        private container: d3.Selection<SVGElement>;
        private slider: d3.Selection<SVGElement>;
        private g: d3.Selection<SVGElement>;

        constructor(options: VisualConstructorOptions) {
            this.host = options.host;
            this.container= d3.select(options.element).append('div').style("background", "pink").classed('container',true);
            
            this.slider = d3.select('div.container').append('div').classed('slider', true);
            this.svg = d3.select('div.slider').append('svg');
            this.g = this.svg.append('g');
        }

        public update(options: VisualUpdateOptions) {           
            let viewModel: TimelineViewModel = visualTransform(options, this.host);
            let timelineData = viewModel.dataPoints;

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

            var maxdate = viewModel.maxDate;
            var mindate = viewModel.minDate;
            
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

            let lines = this.svg.selectAll('.line').data(timelineData);
            lines.enter()
                .append('line')
                .classed('line', true);
            lines.style("stroke", "black");
            lines.attr({
                x1: d=> xScale(d.date),
                y1: height-padding,
                x2: d=> xScale(d.date),
                y2: height-padding-100
            });

            let textTitle = this.svg.selectAll('.textTitle').data(timelineData);
            textTitle.enter()
                    .append('text')
                    .classed('textTitle', true);

            textTitle.attr({
                x: d=> xScale(d.date),
                y: height-padding-110
            });
            textTitle.text(d => d.title);
            // this.svg.selectAll(".textTitle")
            // .attr("transform", function(d) {
            //     return "translate(" + this.getBBox().height*-2 + "," + this.getBBox().height + ")rotate(45)";
            // });
        }

        public destroy(): void {
            //TODO: Perform any cleanup tasks here
        }
    }
}