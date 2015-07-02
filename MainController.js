app.controller('MainController', ['$scope', function($scope) {

//$scope.toptitle = 'You\'ve got A LOT of things to do!';
$scope.todos=[
	{'title': 'Pick up dinner', 'done': false}
];
$scope.addTodo=function(){
	$scope.todos.push({'title': $scope.newtodo, 'done':false})
}
$scope.clearCompleted=function(){
	$scope.todos=$scope.todos.filter(function(item){
		return !item.done
	})
}
$scope.deleteItem = function(index){
	console.log(index);
	$scope.todos.splice(index, 1); 
}

	
	}]);



