fenix.controller('OficinaController', ['$http', function($http) {

	var self = this;
	
	self.init = function() {
		self.findAll();
	}
	
	self.findAll = function() {
		$http.get(SERVER_APP+'/oficina/findall').then(function(resp) {
			self.oficinas = resp.data;
		}, function(error) {
			alert(error.data);
		});
	}
	
	self.save = function(oficina) {
		$http.post(SERVER_APP+'/oficina/save', oficina).then(function(resp) {
			self.oficina = {};
			self.findAll();
		}, function(error) {
			alert(error.data);
		});
	}
	
	self.edit = function(oficina) {
		self.oficina = oficina;
	}
	
	self.del = function(oficina) {
		$http.post(SERVER_APP+'/oficina/delete/'+oficina.id).then(function(resp) {
			self.findAll();
		}, function(error) {
			alert(error.data);
		});  				
	} 
  			
	self.init(); 
	
}]);