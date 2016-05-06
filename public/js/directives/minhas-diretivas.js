/*
  Criacao da diretiva: primeiro parametro o nome da diretiva
  em camelCase e o segundo deve retornar um DDO (directive definition object)
*/
angular.module('minhasDiretivas', [])
  
  .directive('meuPainel', function() {
    var ddo = {};
    
    /* Diretivas podem ser usadas como 'C'omentario 'A'tributo ou 'E'lemento */
    ddo.restrict = "AE";

    /* Preserva elementos filhos, deve adicionar ng-transclude no elemento final */
    ddo.transclude = true;

    /* Isolando escopo do diretiva */
    ddo.scope = {
      /* \@ indica que valor é passado como string */
      titulo: '@'
    };

    /* Template html */
    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
  });