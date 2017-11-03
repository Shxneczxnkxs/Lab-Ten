var app = angular.module('toDo', []);
app.controller('MainCtrl', function($scope){

  $scope.list = [
    {newTask:"Wash Car", completed:true},
    {newTask:"Feed Dog", completed:false}
  ];

  $scope.addTask = function(){
    $scope.list.unshift({
      newTask: $scope.inputTask,
      completed: false
    })
  };
});
