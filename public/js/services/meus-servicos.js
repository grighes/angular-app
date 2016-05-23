angular.module('meusServicos', ['ngResource'])
  .factory('recursoFoto', function($resource) {
    return $resource('/v1/fotos/:fotoId', null, {
      'update': { 
        method: 'PUT'
      }
    });
  });
/* q: permite criação de promisses */
// .factory('cadastroDeFotos', function(recursoFoto, $q) {
//   var servico = {};
//   servico.cadastrar = function(foto) {
//     /* Dois param para $q resolve and reject */
//     return $q(function(resolve, reject) {
//       if(foto._id) {
//         recursoFoto.update({fotoId: foto._id}, foto, function() {
//           resolve({
//             mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso',
//             inclusao: false
//           });
//         }, function(erro) {
//           console.log(erro);
//           reject('Não foi possível alterar a foto');
//         });
//       } else {
//         recursoFoto.save(foto, function() {
//           resolve({
//             mensagem: 'Foto ' + foto.titulo + ' incluída com sucesso',
//             inclusao: true
//           });
//         }, function(erro) {
//           console.log(erro);
//           reject('Não foi possível incluir a foto ' + foto.titulo);
//         });
//       }
//     });
//   };

//   /* Retorna promisse */
//   return servico;
// });