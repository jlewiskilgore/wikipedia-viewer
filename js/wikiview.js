function searchWiki() {
	var searchStr = document.getElementById('searchBox').value;

	$.ajax({
	  url: 'https://en.wikipedia.org/w/api.php',
	  data: { action: 'query', list: 'search', srsearch: searchStr, format: 'json' },
	  dataType: 'jsonp',
	  success: function (x) {

	  	//Get the element of the list and clear its contents for the new search results
	    var resultsContainer = document.getElementById("resultsList");
	    resultsContainer.innerHTML = "";
	    var listItem;
	    var articleURL;

	    for(var i = 0; i < x.query.search.length; i++) {
	    	articleURL = "https://en.wikipedia.org/wiki/" + x.query.search[i].title.replace(" ", "_");
	    	listItem = "<a href="+articleURL+" target='_blank' class='list-group-item'><h2>"+x.query.search[i].title+"</h2>"+x.query.search[i].snippet+"</a><br>";
	    	resultsContainer.innerHTML += listItem;
	    }
	  }
	});
}
