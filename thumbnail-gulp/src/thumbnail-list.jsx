var React = require('react');
var Thumbnail = require('./thumbnail')
module.exports = React.createClass({
		render : function(){
			var list = this.props.thumbnailData.map(function(thumbNailProps){
					return <Thumbnail {...thumbNailProps}/>
			});
			return <div>
				{list}
			</div>
		}
	});