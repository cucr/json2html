## json2html.js

### table

>convert json to table

var movies = [
			{ "Name": "The Red Violin", "ReleaseYear": "1998" },
			{ "Name": "The blue Violin", "ReleaseYear": "1998" },
			{ "Name": "The yellow Violin", "ReleaseYear": "1998" },
			{ "Name": "The purple Violin", "ReleaseYear": "1998" },
			{ "Name": "The orange Violin", "ReleaseYear": "1998" }
		];
var html = JSON2HTML.table(movies);
### ul

>convert json to ul

var html = JSON2HTML.ul(movies);
