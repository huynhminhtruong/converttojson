main.factory('userService', function($http) {
	function getUsers() {
		return $http.get('/users');
	}

	function addUser(data) {
		return $http.post('/users/new', data);
	}

	function deleteUser(email) {
		return $http.delete('/users/remove/' + email);
	}

	return {
		getUsers: getUsers, 
		addUser: addUser, 
		deleteUser: deleteUser
	}
});