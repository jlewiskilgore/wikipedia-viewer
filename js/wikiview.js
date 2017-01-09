function searchWiki() {
	console.log("search button pressed");
	var searchStr = document.getElementById('searchBox').value;
	console.log(searchStr);

	$.ajax({
	  url: 'https://en.wikipedia.org/w/api.php',
	  data: { action: 'query', list: 'search', srsearch: searchStr, format: 'json' },
	  dataType: 'jsonp',
	  success: function (x) {
	  	console.log(x.query.search.length);
	  	console.log(x.query.search[0]);
	    console.log('title', x.query.search[0].title);
	    console.log('snippet', x.query.search[0].snippet);
	  }
	});
}
