fenix.controller('EnderecoCadastroController', ['$http', '$routeParams', function($http, $routeParams) {

	var self = this;
	
	self.init = function() {
		self.findOficinaById($routeParams.oficinaId);
	}
	
	self.findOficinaById = function(oficinaId) {
		$http.get(SERVER_APP+'/oficina/findone/'+oficinaId).then(function(resp) {
			self.oficina = resp.data;
			return self.oficina;
		}).then(function(oficina) {
			self.findEnderecoByOficina(oficina.id);
		}, function(error) {
			alert(error.data);
		});
	}
	
	self.findEnderecoByOficina = function(oficinaId) {
		$http.get(SERVER_APP+'/endereco/findbyoficina/'+oficinaId).then(function(resp) {
 			if(resp.data)
				self.endereco = resp.data;
		}, function(error) {
			alert(error.data);
		});
	}
	
	self.save = function(endereco) {
		endereco.oficina = self.oficina;
		console.log(endereco);
		$http.post(SERVER_APP+'/endereco/save', endereco).then(function(resp) {
			self.endereco = resp.data;
			alert('Endereco gravado com sucesso!!!');
		}, function(error) {
			console.log(error);
			alert(error.data);
		});
	}
			
	self.init(); 
	
}]);