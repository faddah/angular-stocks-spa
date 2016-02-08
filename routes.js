// ROUTES

stocksApp.config(function($routeProvider) {

  $routeProvider

  .when('/', {
    templateUrl: 'views/home.htm',
    controller: 'homeController'
  })
  .when('/stocks', {
    templateUrl: 'views/stocks.htm',
    controller: 'stocksController'
  })
  .when('/stocks/:days', {
    templateUrl: 'views/stocks.htm',
    controller: 'stocksController'
  });

});
