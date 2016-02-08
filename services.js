// SERVICES

stocksApp.service('stocksService', function() {

  this.stocks = {
    stock00: 'GOOG',
    stock01: 'GOOGL',
    stock02: 'MSFT',
    stock03: 'AAPL',
    stock04: 'YHOO',
    stock05: 'TSLA',
    stock06: 'TWTR',
    stock07: 'FB',
    stock08: 'ROP',
    stock09: 'OPGSX',
    stock10: 'FLCSX'
  };
});

stocksApp.service('priceService', ['$resource', function($resource) {
  this.getStockPrice = function(stock) {
    var appid = 'f857b7ab2bf18470438f14cd1da0781f';
    var googleFinanceAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } } );
    return googleFinanceAPI.get({ appid: appid, q: city, cnt: days });
  };
}]);
