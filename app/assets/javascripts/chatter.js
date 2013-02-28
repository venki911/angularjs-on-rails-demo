var chatter_module = angular.module("chatter", []);

chatter_module.config(function($routeProvider) {
  $routeProvider.when("/", { controller: SessionCtrl, templateUrl: "assets/sessions/new.html" });
});
