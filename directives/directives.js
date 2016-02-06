// DIRECTIVES
weatherApp.directive('weatherReport', function () {

  return {
    restrict: 'E',
    templateUrl: 'directives/stock-pricing.htm',
    replace: 'true',
    scope: {
      weatherDay: "=",
      convertToStandardOne: "&",
      convertToStandardTwo: "&",
      convertToDate: "&",
      dateFormat: "@"
    }
  };
  
});
