function emptyTable() {
	var connection = $.hdb.getConnection();
	var stmt = connection
			.executeUpdate('DELETE FROM "mnist.DDL.knn::KNN_TEST"');
	connection.commit();
	connection.close();
}

function putId(param) {
	var after = param.afterTableName;
	var connection = $.hdb.getConnection();
	var ret = connection
			.executeQuery('SELECT MAX("id") + 1 as id FROM "mnist.DDL.knn::KNN_MAN"')[0];
	var id = ret["ID"];
	connection.close();
	var stmt = param.connection.prepareStatement('update "' + after
			+ '" set "id"=' + id);
	stmt.executeUpdate();
	stmt.close();
}