var chatter_module = angular.module("chatter", ["ng", "session", "channel"]);

chatter_module.config(["$routeProvider", "$httpProvider", function($routeProvider, $httpProvider) {
  $routeProvider.when("/", { controller: SessionCtrl, templateUrl: "assets/sessions/new.html" });
  $routeProvider.when(Routes.channel_path(":channel"), { controller: ChannelCtrl, templateUrl: "assets/channel/show.html" });

  var token = angular.element(document.querySelector("meta[name='csrf-token']")).attr("content");
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = token;
}]);
