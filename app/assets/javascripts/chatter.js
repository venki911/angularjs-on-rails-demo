var chatter_module = angular.module("chatter", ["ng"]);

chatter_module.config(function($routeProvider, $httpProvider) {
  $routeProvider.when("/", { controller: SessionCtrl, templateUrl: "assets/sessions/new.html" });

  var token = angular.element(document.querySelector("meta[name='csrf-token']")).attr("content");
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = token;
});
