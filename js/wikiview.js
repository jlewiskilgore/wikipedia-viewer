function searchWiki() {
	console.log("search button pressed");

	$.ajax({
	  url: 'https://en.wikipedia.org/w/api.php',
	  data: { action: 'query', list: 'search', srsearch: 'Richard Feynman', format: 'json' },
	  dataType: 'jsonp',
	  success: function (x) {
	  	console.log(x.query.search[0]);
	    console.log('title', x.query.search[0].title);
	    console.log('snippet', x.query.search[0].snippet);
	  }
	});
}
