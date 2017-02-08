

module.exports = function mapCtrl($scope, $http, $location, $routeParams){

    $http.get('/requests/map/').success(function(data){
        var markersCoordinate = data;
        initialize(markersCoordinate);
    });
    
    
    function initialize(markersCoordinate) {
        var mapProp = {
            center:new google.maps.LatLng(6.94005933,80.05050659),
            zoom:5,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
        marker = [];
        stroke = [];
        for(var i = 0; i < markersCoordinate.length; i++){
            var k = new google.maps.LatLng(markersCoordinate[i].Lat, markersCoordinate[i].Lng)
            stroke[i] = k;
            marker[i] = new google.maps.Marker({
            position: k,
        });
            marker[i].setMap(map);
        }

        var flightPath=new google.maps.Polyline({
        path: stroke,
        strokeColor:"#0000FF",
        strokeOpacity:0.8,
        strokeWeight:2
        });

        flightPath.setMap(map);

    }

}
