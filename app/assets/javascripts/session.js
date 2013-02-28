function SessionCtrl($scope, Session) {
  $scope.nickName = null;

  $scope.loggedIn = function() {
    return $scope.nickName !== null;
  }

  $scope.logIn = function() {
    Session.create({ nick: $scope.nickNameText }, function(response) {
      if (response.success) {
        $scope.nickName = $scope.nickNameText;
      }
    });
  }
}

SessionCtrl.$inject = ["$scope", "Session"];

var session_module = angular.module("session", ['ngResource']);

session_module.factory("Session", function($resource) {
  var Session = $resource(Routes.sessions_path(), {}, { create: { method: "POST" } });

  return Session;
});
