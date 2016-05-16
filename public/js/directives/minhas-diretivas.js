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
  })

  .directive('minhaFoto', function() {
    var ddo = {};
    
    ddo.restrict = "AE";
    ddo.transclude = true;
    ddo.scope = {
      titulo: '@',
      url: '@'
    };
    ddo.templateUrl = 'js/directives/minha-foto.html';

    return ddo;
  })
  .directive('meuBotaoPerigo', function() {
    var ddo = {};
    ddo.restrict = "E";
    ddo.scope = {
      nome: '@',

      /* Quando queremos passar uma expressão para diretiva */
      acao: '&'
    }
    ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';
    return ddo; 
  });