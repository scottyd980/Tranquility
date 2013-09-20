(function() {

Tranquility.rootElement = "#ember";
Tranquility.setupForTesting();
Tranquility.injectTestHelpers();


})();

(function() {

module("Index", {
  setup: function () {
    Tranquility.reset();
  }
});

test("First H1 contains Tranquility", function () {
  visit('/').then(function () {
    equal($('#ember h1').html(), 'Tranquility', 'Title is Tranquility');
  });
});



})();