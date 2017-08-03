function emptyTable() {
	var connection = $.hdb.getConnection();
	var stmt = connection.executeUpdate('DELETE FROM "mnist.DDL.knn::KNN_TEST"');
	connection.commit();
	connection.close();
}
