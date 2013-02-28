var chatter_module = angular.module("chatter", ["ng", "ngCookies", "session"]);

chatter_module.config(["$routeProvider", "$httpProvider", "$cookiesProvider", "$cookieStoreProvider",
                      function($routeProvider, $httpProvider, $cookies, $cookieStore) {
  $routeProvider.when("/", { controller: SessionCtrl, templateUrl: "assets/sessions/new.html" });

  var token = angular.element(document.querySelector("meta[name='csrf-token']")).attr("content");
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = token;

  console.log($cookies);
  console.log($cookieStore);
}]);
