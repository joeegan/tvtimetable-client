$(function(){
	var templateRenderZone = $('.tmp-zone');
	var template = $('#times-tmp').html();
	var isLocal = !!window.location.hostname.match(/localhost/g);
	var hostname = isLocal ? 'localhost:3000' : 'tvtimetable-api.herokuapp.com';
	$.getJSON('http://' + hostname + '/today').then(function(data) {
		templateRenderZone.html(Handlebars.compile(template)(data));
	});
});
