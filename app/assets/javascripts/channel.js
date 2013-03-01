function ChannelCtrl($scope, $routeParams, $timeout, Channel) {
  $scope.name = null;
  $scope.channel = null;
  $scope.members = [];
  $scope.messages = [];

  $scope.$broadcast('channel.load', 'channel-load broadcast');

  $scope.$on('foo', function(e, args) {
    console.log("hello");
    console.log(arguments);
  });

  $scope.memberCount = function() {
    return !($scope.channel && $scope.channel.members) || $scope.channel.members.length;
  }

  $scope.sendMessage = function() {
    $scope.channel.$update({ channel: $scope.name,  message: $scope.messageText });
    $scope.messageText = "";
  }

  $scope.updateChannel = function() {
    Channel.get({ channel: $scope.name }, function(channel) {
      $scope.channel = channel;
      $scope.members = channel.members;
      $scope.messages = channel.messages;
      $timeout($scope.updateChannel);
    });
  }

  $scope.name = $routeParams.channel;
  $scope.updateChannel();
}

ChannelCtrl.$inject = ["$scope", "$routeParams", "$timeout", "Channel"];

var channel_module = angular.module("channel", ["ngResource"])

channel_module.factory("Channel", ["$resource", function($resource) {
  var Channel = $resource(Routes.channel_path(":channel"), { channel: "@channel" },
                          { update: { method: "PUT" } });

  return Channel;
}]);
