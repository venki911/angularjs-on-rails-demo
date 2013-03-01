function SessionCtrl($scope, $location, Session) {
  $scope.nickName = null;

  $scope.loggedIn = function() {
    return $scope.nickName !== null;
  }

  $scope.logIn = function() {
    Session.save({ nick: $scope.nickNameText }, function(response) {
      if (response.success) {
        $scope.nickName = $scope.nickNameText;
        $location.path(Routes.channel_path("main"));
      }
    });
  }
}

SessionCtrl.$inject = ["$scope", "$location", "Session"];

var session_module = angular.module("session", ['ngResource']);

session_module.factory("Session", ["$resource", function($resource) {
  var Session = $resource(Routes.sessions_path());

  return Session;
}]);
