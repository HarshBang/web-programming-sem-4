var app = angular.module("myApp", []);
app.directive("w3TextDirective", function () {
  return {
    template: "I am from 1st direcctive constructor!!!",
  };
}); 