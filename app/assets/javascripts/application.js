// angular.js
var jobhuk = angular.module('jobhuk', ['ngRoute']);
// define routes
jobhuk.config(function ($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      controller: 'homeController',
      templateUrl: '/app/views/home/layout.html',
      title: 'Landing Layout',
      page_body_class: 'home'
    })
    .when('/index', {
      controller: 'homeController',
      templateUrl: '/app/views/home/index.html',
      title: 'Index',
      page_body_class: 'home home_index'
    })
    .when('/about_us', {
      controller: 'homeController',
      templateUrl: '/app/views/home/about_us.html',
      title: 'About us',
      page_body_class: 'home home_about_us'
    })
    .when('/how_it_works', {
      controller: 'homeController',
      templateUrl: '/app/views/home/how_it_works.html',
      title: 'How it works',
      page_body_class: 'home home_how_it_works'
    })
    .otherwise({redirectTo: '/'});
});

jobhuk.run(function ($rootScope, $location, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    $rootScope.pageTitle = current.$$route.title;
    $rootScope.page_body_class = current.$$route.page_body_class;
  });
});

controllers = {};
controllers.homeController = function ($scope, $location, $rootScope, $routeParams, $http, $filter) {

};
jobhuk.controller(controllers);

//jQuery
$(document).ready(function () {

});

