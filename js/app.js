var colourPallete = angular.module("colourPallete", []);
colourPallete.controller("ColourController",["$scope",function ($scope){

	$scope.colour = {
		// red: 0,
		// green: 0,
		// blue: 0
	};
    $scope.colour2={
        
    };
    
var MyStyle = function(red,green,blue){
this.style = {background: 'hsl('+red+','+green+'%'+','+blue+'%'+')'};
    
    };
    
    $scope.Style = [];
   
  
	$scope.addColour = function (colour) {

        var style = new MyStyle(colour.red, colour.green, colour.blue);
        console.log(style);
        $scope.Style.push(style);
    };
    
    $scope.removeColor = function(index){
    $scope.Style.splice(index,1);
    };
    $scope.clearAll = function(){
    $scope.Style =[];
        $scope.colour.red ="";
        $scope.colour.blue="";
        $scope.colour.green="";
    };
    $scope.editPointColour = function(index){
        
    $scope.Style[index].style = {background: 'hsl('+$scope.colour2.red+','+$scope.colour2.green+'%'+','+$scope.colour2.blue+'%'+')'};
      /*  $scope.colour2.red ="";
        $scope.colour2.blue="";
        $scope.colour2.green="";*/
    }
    $scope.sortPics = function(){
    
    };
}]);
    
  /*  colourPallete.controller("EditController",["$scope",function($scope){
    
    $scope.colour2 = {
    
    };
        
        $scope.paint = function(){
        
        $scope.newStyle={background: 'hsl'+red+','+green+'%'+','+blue+'%'+')'};
        };
    }]);*/