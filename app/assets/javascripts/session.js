function SessionCtrl($scope) {
  $scope.nickName = null;

  $scope.loggedIn = function() {
    return $scope.nickName !== null;
  }

  $scope.logIn = function() {
    $scope.nickName = $scope.nickNameText;
  }
}
