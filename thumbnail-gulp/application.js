var options = {
		thumbnailData :[{
			title : 'Inbox',
			number : 32,
			header : 'Learn React',
			description : 'React is a fantastic library to make we application.React is a fantastic library to make we application.',
			imageUrl : 'http://formatjs.io/img/react.svg'
		},{
			title : 'Show Courses',
			number : 12,
			header : 'Learn Gulp',
			description : 'Gulp will speed up your development flow.Gulp will speed up your development flow.',
			imageUrl : 'http://gaboesquivel.com/images/2014/04/gulp-js.jpg'	
		}]
	};
	// React, please render this class
	var element = React.createElement(Thumbnailist,options);
	//React after you render this class , please place it in my body
	React.render(element , document.querySelector('.container'));

var Badge = React.createClass({displayName: "Badge",
		render : function(){
			 return React.createElement("button", {className: "btn btn-primary", type: "button"}, this.props.title, React.createElement("span", {className: "badge"}, this.props.number)
			 )
		}
	});
var Thumbnail = require('thumbnail')
var Thumbnailist = React.createClass({displayName: "Thumbnailist",
		render : function(){
			var list = this.props.thumbnailData.map(function(thumbNailProps){
					return React.createElement(Thumbnail, React.__spread({},  thumbNailProps))
			});
			return React.createElement("div", null, 
				list
			)
		}
	});
var Badge = require('badge')
var Thumbnail = React.createClass({displayName: "Thumbnail",
		render : function(){
			return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
        React.createElement("div", {className: "thumbnail"}, 
        	React.createElement("img", {src: this.props.imageUrl, alt: "..."}), 
        	React.createElement("div", {className: "caption"}, 
            	React.createElement("h3", null, this.props.header), 
            	React.createElement("p", null, this.props.description), 
            	React.createElement("p", null, 
              	React.createElement(Badge, {title: this.props.title, number: this.props.number})
            	)
          	)
        	)
      )
		}
	});