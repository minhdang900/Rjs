window.MorrisJS = React.createClass({
	componentWillMount: function(){
	},
	componentDidMount: function(){
		if(this.props.type =="line"){
			Morris.Line({
		        element: this.props.id,
		        data: [
		            { year: '2006', a: 25, b: 15 },
		            { year: '2007', a: 50, b: 40 },
		            { year: '2008', a: 75, b: 65 },
		            { year: '2009', a: 100, b: 90 },
		            { year: '2010', a: 60, b: 50 },
		            { year: '2011', a: 75, b: 65 },
		            { year: '2012', a: 100, b: 90 } 
		        ],
		        xkey: 'year',
		        ykeys: ['a', 'b'],
		        labels: ['a', 'b'],
		        resize: true,
		        lineColors: ['#6ad6c3','#22BAA0']
		    });
		} else if(this.props.type =="column"){
			 Morris.Bar({
			        element: this.props.id,
			        data: [
			            { year: '2006', a: 25, b: 15 },
			            { year: '2007', a: 50, b: 40 },
			            { year: '2008', a: 75, b: 65 },
			            { year: '2009', a: 100, b: 90 },
			            { year: '2010', a: 60, b: 50 },
			            { year: '2011', a: 75, b: 65 },
			            { year: '2012', a: 100, b: 90 } 
			        ],
			        xkey: 'year',
			        ykeys: ['a', 'b'],
			        labels: ['a', 'b'],
			        barRatio: 0.4,
			        xLabelAngle: 35,
			        hideHover: 'auto',
			        barColors: ['#6ad6c3','#22BAA0'],
			        resize: true
			    });
		} else if(this.props.type =="area"){
			Morris.Area({
		        element: this.props.id,
		        data: [
		            {period: '2010 Q1', iphone: 2666, ipad: null, itouch: 2647},
		            {period: '2010 Q2', iphone: 2778, ipad: 2294, itouch: 2441},
		            {period: '2010 Q3', iphone: 4912, ipad: 1969, itouch: 2501},
		            {period: '2010 Q4', iphone: 3767, ipad: 3597, itouch: 5689},
		            {period: '2011 Q1', iphone: 6810, ipad: 1914, itouch: 2293},
		            {period: '2011 Q2', iphone: 5670, ipad: 4293, itouch: 1881},
		            {period: '2011 Q3', iphone: 4820, ipad: 3795, itouch: 1588},
		            {period: '2011 Q4', iphone: 15073, ipad: 5967, itouch: 5175},
		            {period: '2012 Q1', iphone: 10687, ipad: 4460, itouch: 2028},
		            {period: '2012 Q2', iphone: 8432, ipad: 5713, itouch: 1791}
		        ],
		        xkey: 'period',
		        ykeys: ['iphone', 'ipad', 'itouch'],
		        labels: ['iPhone', 'iPad', 'iPod Touch'],
		        hideHover: 'auto',
		        lineColors: ['#8adfd0', '#6ad6c3','#22BAA0'],
		        resize: true,
		    });
		} else if(this.props.type =="donut"){
			Morris.Donut({
		        element: this.props.id,
		        data: [
		            {label: 'Javascript', value: 35 },
		            {label: 'HTML5', value: 45 },
		            {label: 'CSS3', value: 30 },
		            {label: 'PHP', value: 20 }
		        ],
		        resize: true,
		        colors: ['#74e4d1', '#44cbb4', '#119d85','#22BAA0'],
		    });
		}
		
	},
	componentWillUnmount: function(){
	},
	render: function(){
		return(
			
			<div className="panel panel-white">
		        <div className="panel-heading">
	            	<h3 className="panel-title">{this.props.title}</h3>
					<div className="panel-control">
		                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Expand/Collapse" className="panel-collapse"><i className="icon-arrow-down"></i></a>
		                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Reload" className="panel-reload"><i className="icon-reload"></i></a>
		                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Remove" className="panel-remove"><i className="icon-close"></i></a>
		            </div>
	        	</div>
	            <div className="panel-body">
	            	<div id={this.props.id}></div>
	            </div>
	        </div>
		);
	}
})