function handleRequest() {
	var connection = $.hdb.getConnection();
	var knn_test = connection.loadProcedure("MNIST", "mnist::KNN_TEST");
	var result = knn_test(1);
	return result["predict_result"];
}

(function() {
	if ($.request.method == $.net.http.POST) {
		$.response.setBody(handleRequest());
	} else {
		$.response.status = $.net.http.METHOD_NOT_ALLOWED;
		$.response.setBody("only POST is allowed to request.");
	}
})();
