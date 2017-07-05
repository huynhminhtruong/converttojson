main.factory('modelService', function($http) {
	function getModels() {
		return $http.get('/models');
	}

	return {
		getModels: getModels
	}
})