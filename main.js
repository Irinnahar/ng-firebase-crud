var app = angular.module('userApp', ['ngMaterial']);
app.controller('userCtrl', function userCtrl($scope , $http) {

	// get student info
	function getData(){
		$scope.students = {};
		$http.get('https://student-test-b0adc.firebaseio.com/student.json').then(function(response){
			$scope.students = response.data;
			console.log($scope.students)
		})
	}
	getData();
	
	// post student info	
	$scope.add = function(){
		var obj ={
			name: $scope.stdname,
			age: $scope.stdage,
			group: $scope.stdgroup,
			city: $scope.stdcity
		}
		$scope.stdname = "";
		$scope.stdage = "";
		$scope.stdgroup= "";
		$scope.stdcity= "";

		$http.post('https://student-test-b0adc.firebaseio.com/student.json', obj)
		 .then(function(response){
		 	
		})
	}

	// delete student info
	$scope.delete= function(key){
		$http.delete('https://student-test-b0adc.firebaseio.com/student/' + key + '.json')
			.then(function(response){
				//console.log(key)

		})
	}

	// update info
	$scope.edit = function(key,student){
		$scope.showsave = true;
		$scope.createadd = false;
		// console.log(key)
		$scope.stdname = student.name;
		$scope.stdage = student.age;
		$scope.stdgroup= student.group;
		$scope.stdcity= student.city;
		$scope.id = key;

	}
	 $scope.save =function(){
	 	var updateobj= {
	 		name: $scope.stdname,
			age: $scope.stdage,
			group: $scope.stdgroup,
			city: $scope.stdcity

	 	} 
	 	$scope.stdname = "";
		$scope.stdage = "";
		$scope.stdgroup= "";
		$scope.stdcity= "";
	 	$http.patch('https://student-test-b0adc.firebaseio.com/student/' + $scope.id + '.json', updateobj)
	 		.then(function(response){
	 			console.log($scope.id)
	 		})
	 }
	
	$scope.showsave = false;
	$scope.createadd = true;
})