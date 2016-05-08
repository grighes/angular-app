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

	$http.get('v1/fotos')
	.success(function(fotos) {
		$scope.fotos = fotos;
	})
	.error(function(erro) {
		console.log(erro);
	});

});