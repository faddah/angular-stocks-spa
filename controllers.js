// CONTROLLERS
angular.module('stocksApp', ['ngRoute', 'ngResource'])

  .controller('homeController', ['$scope', '$log', '$routeParams', '$location', 'cityService', function($scope, $log, $routeParams, $location, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function() {
      cityService.city = $scope.city;
    });

    $scope.submit = function() {
      $location.path("/stocks");
    };

  }])

  .controller('stocksController', ['$scope', '$log', '$routeParams', 'cityService', 'weatherService', function($scope, $log, $routeParams, cityService, weatherService) {

    $scope.city = cityService.city;

    $scope.days = $routeParams.days || '1';

    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);

    // $log.info($scope.weatherResult);
  /* * * * * * * * */
    $scope.convertToFarenheit = function(degK) {

      return Math.round((degK* 1.8) - 459.67);

    };

    $scope.convertToCelsius = function(degK) {

      return Math.round(degK - 273.15);

    };

    $scope.convertToDate = function(dt) {

      return new Date(dt * 1000);

    };

}]);
