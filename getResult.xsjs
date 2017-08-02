function handleRequest() {
	try {
		var body = $.request.body.asString();
		var pixelList = JSON.parse(body);
	} catch (e) {
		return e.toString();
	}
	var output = "";
	for (var i = 0; i < pixelList.length; i++) {
		output += pixelList[i] + " ";
	}
	return output;
}

(function() {
	if ($.request.method == $.net.http.POST) {
		$.response.setBody(handleRequest());
	} else {
		$.response.status = $.net.http.METHOD_NOT_ALLOWED;
		$.response.setBody("only POST is allowed to request.");
	}
})();