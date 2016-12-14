var app = angular.module('App', ['ui.bootstrap']);

app.controller('HomeCtrl', function ($scope, $http) {

  $scope.users = [];
  // set page
  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  // page changed
  $scope.pageChanged = function () {
    paginateMethod()
  };

  $scope.search = function () {
    paginateMethod()
  }

  paginateMethod()

  /* http and paginate object */
  function paginateMethod () {

    var search = ($scope.input) ? $scope.input : null;
    var currentPage = $scope.currentPage;
    var data = { page: currentPage, search: search };

    $http.get('api/users', { params: data })
      .then(function (response) {

        $scope.users = response.data.data;
        
        /* Update pagination object */
        $scope.pagination = {
          currentPage: 1,
          maxSize: 50,
          totalItems: response.data.count,
        };

      }, function (response) {
        // not found users
      });
  }

});
