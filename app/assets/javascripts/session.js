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

  $scope.isMe = function(nick) {
    return $scope.nickName == nick.nick;
  }

  $scope.memberCount = function() {
    return $scope.nickNames.length;
  }

  $scope.getNicks();
}

SessionCtrl.$inject = ["$scope", "$timeout", "Session"];

var session_module = angular.module("session", ['ngResource']);

session_module.factory("Session", ["$resource", function($resource) {
  var Session = $resource(Routes.sessions_path(), {}, { create: { method: "POST" } });

  return Session;
}]);
