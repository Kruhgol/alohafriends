'use strict';

module.exports = angular.module('AlohaFriends.foo',[])
	.config(require('./routes.js'))
    .directive('headerDir', ['$templateCache', '$location', require('./directives/header.directive')])
    .controller('homeCtrl', ['$http', '$location', '$routeParams', require('./controllers/home.controller')])
    .controller('headerCtrl', require('./controllers/header.controller'))
    .controller('countryCtrl', require('./controllers/country.controller'))
    .controller('articleCtrl', require('./controllers/article.controller'))


    
 //    
 //    // .controller('menuCtrl', require('./controllers/menu.controller'))
 //    .controller('articlesCtrl', require('./controllers/articles.controller'))
 //    .controller('articleCtrl', require('./controllers/article.controller'))
 //    .controller('videoCtrl', require('./controllers/video.controller'))
 //    .controller('mapCtrl', require('./controllers/map.controller'))
 //    .controller('markCtrl', require('./controllers/mark.controller'))
 //    .directive('menuDir', ['$templateCache', '$location', require('./directives/menu.directive')])
 //    .directive('karuselDir', ['$templateCache', '$location', require('./directives/karusel.directive')])
 //    // .component('footer-component', require('./components/footer.component'))
 //    .filter('trustAsHtml', ['$sce', require('./filters/trustAsHtml.filter')])