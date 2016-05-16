/*
  Nome do modulo principal
  Nome do controller que deve ir na tag html coberta por ele: ng-controller="FotosController"
  Pode existir vários controllers e ser responsavel por uma parte especifica do html
  $scope: permite acesso ao escopo do controller
  $http: servico angular responsavel por requisicoes ajax
  Ordem dos parametros nao importa, ele busca por nome do parametro
*/
angular.module('angular').controller('FotosController', function($scope, recursoFoto) {

  $scope.fotos = [];
	$scope.filtro = '';
  $scope.mensagem = '';

  /* Recurso angular especializado em consumir dados do server */
  var recursoFoto = $resource('/v1/fotos/:fotoId');
  
  recursoFoto.query(function(fotos) {
    $scope.fotos = fotos;
  }, function(erro) {
    console.log(erro);
  });

  /* Passa foto em especifico no parametro */
  $scope.remover = function(foto) {

    recursoFoto.delete({fotoId: foto._id}, function() {
      // Realiza remoção da foto 
      var indiceFoto = $scope.fotos.indexOf(foto);
      $scope.fotos.splice(indiceFoto, 1);
      $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida';
    }, function(erro) {
      console.log(erro);
      $scope.mensagem = 'Foto ' + foto.titulo + ' não foi removida';
    });

  }

});