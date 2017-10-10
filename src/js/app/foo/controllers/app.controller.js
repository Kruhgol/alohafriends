module.exports = function($scope){
    if (document.documentElement.clientWidth > 1200){
        $scope.windowBig = true;
        $scope.windowAverage = false;        
    } else {
        $scope.windowBig = false;
        $scope.windowAverage = true;
    }

    if(document.documentElement.clientWidth >= 1400){
        $scope.mainHeader = 'media/main_header_big.png'
    } else {
        $scope.mainHeader = 'media/main_header.png'
    }

    window.onresize = function(){
        var windowWidth = document.documentElement.clientWidth;
        if(windowWidth > 1200){
            console.log('fffff');
            $scope.windowBig = true;
            $scope.windowAverage = false; 
            $scope.$apply();    
        } else {
            console.log('kjjhgjhgjgj');
            $scope.windowBig = false;
            $scope.windowAverage = true;
            $scope.$apply();   
        }

        if(windowWidth >= 1400){
            $scope.mainHeader = 'media/main_header_big.png'
        } else {
            $scope.mainHeader = 'media/main_header.png'
        }
    }

}