

module.exports = function($templateCache, $location){
    return {
        link: function(scope, element, attribute){
            var position = 0;
            var karusel = angular.element(document.querySelector(".karusel"));
            var movePx;
            var articleKaruselWidth;
            var karuselWidth;
            getWindowWidth();
            

            scope.prewPhotos = function(){
                if (position >= 0){
                    position = 0;
                } else {
                    position += moveKarusel;
                }
                console.log('articleKaruselWidth = ' + articleKaruselWidth);
                console.log('position = ' + position);
                console.log('karuselWidth = ' + karuselWidth);
                var positionPx = position + 'px';
                karusel.css("left",positionPx);
                console.log(karusel.css("left"));
                
            }
            scope.nextPhotos = function(){
                if (articleKaruselWidth - position + moveKarusel > karuselWidth){
                    position = articleKaruselWidth - karuselWidth;
                } else {
                    position -= moveKarusel;
                }
                console.log('articleKaruselWidth = ' + articleKaruselWidth);
                console.log('position = ' + position);
                console.log('karuselWidth = ' + karuselWidth);
                
                var positionPx = position + 'px';
                karusel.css("left",positionPx);
                console.log(karusel.css("left"));
            }

            scope.nextImage = function() {
                if (scope.imageIndex == scope.photosLength-1){
                    scope.imageIndex = scope.photosLength-1; 
                } else {
                    scope.imageIndex++;
                }
                scope.image = scope.article.photos[scope.imageIndex];
            }

            scope.imageClick = function(index){
                console.log(index);
                scope.image = scope.article.photos[index];
                scope.imageIndex = index;
            }

            scope.$watch(function(){return scope.article}, function(newValue, oldValue){ 
                getWindowWidth();
            });



            window.onresize = getWindowWidth;

            function getWindowWidth(){
                        var windowWidth = window.innerWidth;
                        var imageWidth;
                        console.log('photosLength =' + scope.photosLength);

                        if (windowWidth < 750) {
                            articleKaruselWidth = 300;
                            moveKarusel = 100;
                            imageWidth = 50;
                            karuselWidth = (scope.photosLength * imageWidth);
                        }
                        else if (windowWidth > 1000){
                            articleKaruselWidth = 950;
                            moveKarusel = 300;
                            imageWidth = 150;
                            karuselWidth = (scope.photosLength * imageWidth);
                        } else {
                            articleKaruselWidth = 700;
                            moveKarusel = 200;
                            imageWidth = 100;
                            karuselWidth = (scope.photosLength * imageWidth);
                        }
                        var karuselWidthPx = karuselWidth + 'px';
                        var imageWidthPx = imageWidth +'px';
                        console.log(imageWidth);
                        karusel.css("width", karuselWidthPx);
                        karusel.find("img").attr("width", imageWidthPx);
                    }            

        },

        restrict: 'EA',

        template: $templateCache.get('templates/karusel.html'),

    }
}


