function SessionCtrl($scope, $timeout, Session) {
  $scope.nickName = null;
  $scope.nickNames = [];

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

  $scope.getNicks = function() {
    var nicks = Session.query(function() {
      if ($scope.nickNames.length !== nicks.length) {
        $scope.nickNames = nicks;
      }

      $timeout($scope.getNicks);
    })
  }

  $scope.getNicks();
}

SessionCtrl.$inject = ["$scope", "$timeout", "Session"];

var session_module = angular.module("session", ['ngResource']);

session_module.factory("Session", function($resource) {
  var Session = $resource(Routes.sessions_path(), {}, { create: { method: "POST" } });

  return Session;
});
