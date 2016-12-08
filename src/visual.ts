module powerbi.extensibility.visual {

	/**
	 * ViewModel
	 */
	interface TimelineViewModel {
		//	events: TimelineDataPoints[]	;
		minStartDate: Date;
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
		console.log("options", options);

		// let table = dataViews[0].table;
		// let rows  = table.rows[0][2];
		// console.log(rows[15]);
		// let columns = table.columns;
		//let startDate = rows[2].roles;
		//let endDate =categorical[5];
		let categorical = dataViews[0].categorical;
		let categories = categorical.categories;
		// console.log("categories  " ,categories[5].values[5]);
		console.log("categories", categories);
		let startDate = categories[4].values;
		let endDate = categories[5].values;
		console.log("startdate", startDate)
		console.log("enddate", endDate);


		let _startDate = startDate.map(function (n) {
			console.log("mapping");

			if (n) {
				let x = new Date(n.toString());
				return x;
			}


		});

		function filterByID(obj) {
			if (obj !== null  && !isNaN(obj)) {
				return true;
			} else {
				return false;
			}
		}

		endDate = endDate.filter(filterByID);
		startDate = startDate.filter(filterByID);

		console.log("filtered End date" , endDate);
		
		console.log("mini data", new Date(Math.min.apply(null, startDate)));


		let timelineView: TimelineViewModel = {
			minStartDate: new Date(Math.min.apply(null, startDate)),
			maxEndDate: new Date(Math.max.apply(null, endDate))
		}

		console.log("timelineview", timelineView);
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
			console.log("Start Date", timelineView.minStartDate, "...End Date", timelineView.maxEndDate);

			var xScale = d3.time.scale()
				.domain([timelineView.minStartDate, timelineView.maxEndDate])
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