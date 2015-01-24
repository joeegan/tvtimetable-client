$(function(){
	var containerJq = $('.container');
	var template = $('#times-tmp').html();
	$.getJSON('http://localhost:3000/today').then(function(data) {
		containerJq.append(Handlebars.compile(template)(data));
	});
});
