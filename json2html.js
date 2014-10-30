/*! Licensed under MIT. (c) cucr https://github.com/cucr/json2html.js */
(function() {

  if(typeof JSON2HTML !== 'undefined') return;

  var table, ul;

  // json render to table
  table = function(json) {
	var ret = "";
	if(json.length<=0){
		return ret;
	}
	ret = "<table><thead><tr>";
	for (var k in json[0]) {
		ret = ret +'<th>' + k + '</th>';
	}
	ret = ret + '</thead></tr><tbody>';
	for (var i = 0, L = json.length; i < L; i++) {
		ret = ret + '<tr>';
		for (var k in json[i]){
			ret = ret + '<td>' + (json[i][k] === null ? "&nbsp;" : json[i][k]) + '</td>';
		}
		ret = ret +'</tr>';
	}
	return ret +'</tbody></table>';
  };

  // json render to ul
  ul = function(json) {
	var ret = "";
	if(json.length<=0)
		return ret;
	ret = "<ul>";
	for (var i = 0, L = json.length; i < L; i++) {
		for (var k in json[i]) {
				ret = ret + '<li>' + (json[i][k] === null ? "&nbsp;" : json[i][k]) + '</li>';
				//读完第一列就跳出
				break;
		}
	}
	return ret +'</ul>'
  };

  // JSON2HTML
  JSON2HTML = {table : table,ul : ul };
  
})();
