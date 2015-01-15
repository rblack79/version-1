// JavaScript Document
var ContactList = angular.module('ContactList',['ui.bootstrap']);

ContactList.controller('AddContact',function($scope,$modal){
		$scope.Contacts = [];		
		$scope.openContactForm = function(){
				var instance = $modal.open({
					templateUrl:'addContact.html',
					controller:'ContactForm',
				})			
			instance.result.then(function(input){
				
				$scope.Contacts.push(input);
				
			})
		}
		
	});
ContactList.controller('ContactForm',function($scope,$modalInstance){
		$scope.input = {};
		$scope.ok = function(){
			var d = new Date();
			var day = d.getDate();
			var mon = d.getMonth()+1;
			var year = d.getYear();
			d = '';
			$scope.input.dateadded = mon+"/"+day+"/"+year;
			$modalInstance.close($scope.input);	
		};
		$scope.cancel = function(){
				$modalInstance.dismiss('Cancel');
		};
	});