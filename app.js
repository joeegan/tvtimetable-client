$(function(){
	var containerJq = $('.container');
	var template = $('#times-tmp').html();
	var isLocal = !!window.location.hostname.match(/localhost/g);
	var hostname = isLocal ? 'localhost:3000' : 'tvtimetable-api.herokuapp.com';
	$.getJSON('http://' + hostname + '/today').then(function(data) {
		containerJq.append(Handlebars.compile(template)(data));
	});
});
