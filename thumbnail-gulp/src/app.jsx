var React = require('react');
var ThumbnailList = require('./thumbnail-list');
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
	var element = React.createElement(ThumbnailList,options);
	//React after you render this class , please place it in my body
	React.render(element , document.querySelector('.container'));
