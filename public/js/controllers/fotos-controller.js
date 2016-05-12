/*
  Nome do modulo principal
  Nome do controller que deve ir na tag html coberta por ele: ng-controller="FotosController"
  Pode existir vários controllers e ser responsavel por uma parte especifica do html
  $scope: permite acesso ao escopo do controller
  $http: servico angular responsavel por requisicoes ajax
  Ordem dos parametros nao importa, ele busca por nome do parametro
*/
angular.module('angular').controller('FotosController', function($scope, $http) {

  $scope.fotos = [];
	$scope.filtro = '';
  $scope.mensagem = '';

	$http.get('v1/fotos')
	.success(function(fotos) {
		$scope.fotos = fotos;
	})
	.error(function(erro) {
		console.log(erro);
	});

  /* Passa foto em especifico no parametro */
  $scope.remover = function(foto) {
    $http.delete('v1/fotos/' + foto._id)
    .success(function() {
      // Realiza remoção da foto 
      var indiceFoto = $scope.fotos.indexOf(foto);
      $scope.fotos.splice(indiceFoto, 1);
      $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida';

    })
    .error(function(erro) {
      console.log(erro);
      $scope.mensagem = 'Foto ' + foto.titulo + ' não foi removida';
    });
  }

});