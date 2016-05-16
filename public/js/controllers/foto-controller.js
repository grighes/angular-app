angular.module('angular').controller('FotoController', function($scope, recursoFoto, $routeParams) {
  $scope.foto = {};
  $scope.mensagem = '';



  /* Buscando foto no servidor pelo $routeParams */
  if($routeParams.fotoId) {
    recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
      $scope.foto = foto;
    }, function(erro) {
      console.log(erro);
      $scope.mensagem = 'Não foi possível alterar a foto'
    });
  }

  $scope.submeter = function() {
    if ($scope.formulario.$valid) {
      
      /* Se scope tem foto id então edita foto*/
      if($scope.foto._id) {
        recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function() {
          $scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso';
        }, function(erro) {
          console.log(erro);
          $scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
        });
      } else {
        /* Gera recurso post para /v1/fotos */
        recursoFoto.save($scope.foto, function() {
          $scope.foto = {};
          $scope.mensagem = 'Foto cadastrada com sucesso';
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível cadastrar a foto';
        })
      }

    }
  };
  
});