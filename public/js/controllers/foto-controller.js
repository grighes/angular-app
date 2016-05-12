angular.module('angular').controller('FotoController', function($scope, $http, $routeParams) {
  $scope.foto = {};
  $scope.mensagem = '';

  console.log($routeParams.fotoId);

  $scope.submeter = function() {
    if ($scope.formulario.$valid) {
      $http.post('/v1/fotos', $scope.foto)
      .success(function() {
          $scope.foto = {};
          $scope.mensagem = 'Foto cadastrada com sucesso';
      })
      .error(function(erro) {
          console.log(erro);
          $scope.mensagem = 'Não foi possível cadastrar a foto';
      })
    }
  };
  
});