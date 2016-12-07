module powerbi.extensibility.visual {

	/**
	 * ViewModel
	 */
	interface TimelineViewModel {
		//	events: TimelineDataPoints[]	;
		maxStartDate: Date;
		maxEndDate: Date;

	};

	/**
	 * Data points for each events
	 */
	interface TimelineDataPoints {
		eventName: string;
		startDate: Date;
		endDate: Date;

	};

	/**
	 * 
	 */
	function converter(options: VisualUpdateOptions): TimelineViewModel {
		console.log("enter converter");

	    let dataViews = options.dataViews;
        let categorical = dataViews[0].categorical;
		let fy = categorical.categories[0];
        let startDate = categorical.categories[4];
		let endDate = categorical.categories[5];

		console.log("categorical" , categorical.categories);
		
		console.log("fy" , fy);
		
		console.log("start_dates" ,startDate);
		console.log("endDate" , endDate);
		
		//	sortedDate.map(function(d: PrimitiveValue):Date{ return new Date(d)});

		let timelineView: TimelineViewModel = {
			maxStartDate: new Date(),
			maxEndDate: new Date()
		}

		console.log(timelineView);
		return timelineView;
	}

	export class Visual implements IVisual {
		private svg: d3.Selection < SVGElement > ;
		private container: d3.Selection < SVGElement > ;
		private slider: d3.Selection < SVGElement > ;
		private g: d3.Selection < SVGElement > ;
		private timelineView: TimelineViewModel;
		private target: HTMLElement;

		constructor(options: VisualConstructorOptions) {
			console.log("helloe");

			this.target = options.element;
			let svg = this.svg = d3.select(options.element).append('svg').classed('mainSvg', true);

		}



		public update(options: VisualUpdateOptions) {
			var width = options.viewport.width,
				height = options.viewport.height,
				padding = 100;
			let timelineView: TimelineViewModel = converter(options);
			// let maxStartDate= timelineView.maxStartDate.getUTCFullYear();
			// let maxEndDate = timelineView.maxEndDate.getUTCFullYear();
			//	this.target.innerHTML = `<p>Update count: <em>${(maxStartDate)}</em></p> <p>Update count: <em>${(maxEndDate)}</em></p`;
			console.log("Start Date", timelineView.maxStartDate, "...End Date", timelineView.maxEndDate);

			var xScale = d3.time.scale()
				.domain([timelineView.maxStartDate, timelineView.maxEndDate])
				.range([padding, width - padding]);


			var xAxis = d3.svg.axis()
				.orient("bottom")
				.scale(xScale)
				.ticks(d3.time.months, 1)
				.tickFormat(d3.time.format("%b %y"))
				.tickSize(16, 2)

			this.svg.selectAll("*").remove();

			this.svg.append("g")
				.attr("class", "xaxis")
				.attr("transform", "translate(0," + (height - padding) + ")")
				.call(xAxis);

			this.svg.selectAll(".xaxis text")
				.attr("transform", function (d) {
					return "translate(" + this.getBBox().height * -2 + "," + this.getBBox().height + ")rotate(-45)";
				});

		}

		public destroy(): void {
			//TODO: Perform any cleanup tasks here
		}
	}
}