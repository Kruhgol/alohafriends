module.exports = angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('templates/article.html','\t\t<div class="container-fluid article-menu">\r\n\t\t\t<div class="row menu">\r\n\r\n\t\t\t\t<div class="col-lg-1  hidden-md hidden-sm hidden-xs">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">\r\n\t\t\t\t\t<a href="#">#Alohafriends</a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-1 col-md-2 col-sm-2 col-xs-12 menu-element">\r\n\t\t\t\t\t<a href="#">\u041E \u043D\u0430\u0441</a>\r\n\t\t\t\t\t<div class="menu-element-list">\r\n\t\t\t\t\t\t<a href="#">\u041D\u0430\u0441\u0442\u044F</a><br/>\r\n\t\t\t\t\t\t<a href="#">\u0414\u0430\u043D\u0438\u043B</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-1 col-md-2 col-sm-2 col-xs-12 menu-element">\r\n\t\t\t\t\t<a href="#">\u0414\u043D\u0435\u0432\u043D\u0438\u043A</a>\r\n\t\t\t\t\t<div class="menu-element-list">\r\n\t\t\t\t\t\t<a href="#/country/maldives">\u041C\u0430\u043B\u044C\u0434\u0438\u0432\u044B</a><br/>\r\n\t\t\t\t\t\t<a href="#">\u0428\u0440\u0438-\u041B\u0430\u043D\u043A\u0430</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-1 col-md-2 col-sm-2 col-xs-12">\r\n\t\t\t\t\t<a href="#">\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u044B</a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-1 col-md-2 col-sm-1 col-xs-12">\r\n\t\t\t\t\t<a href="#">\u0421\u0432\u044F\u0437\u044C</a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-2">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-2 col-md-2 col-sm-3 col-xs-12">\r\n\t\t\t\t\t<a href="#"><div class="sprite sprite-vk"></div></a>\r\n\t\t\t\t\t<a href="#"><div class="sprite sprite-fb"></div></a>\r\n\t\t\t\t\t<a href="#"><div class="sprite sprite-in"></div></a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-1 hidden-md hidden-sm hidden-xs">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\t\t\r\n\t\r\n\t</br>\r\n\t</br>\r\n\r\n\t<div class="container-fluid article">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-lg-1 col-md-1"></div>\r\n\t\t\t<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">\r\n\t\t\t\t\t<img ng-src="{{mainImg}}" class="img-responsive">\r\n\t\t\t\t\t<div class="row">\r\n\t\t\t\t\t\t<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\r\n\t\t\t\t\t\t\t<button class="previous" ng-click="changeNumberImg(\'-\')" ng-disabled="ifNumberImgNotMin()">&lt;</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="col-lg-8 col-md-8 col-sm-8 col-xs-8"></div>\r\n\t\t\t\t\t\t<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\r\n\t\t\t\t\t\t\t<button class="next" ng-click="changeNumberImg(\'+\')" ng-disabled="ifNumberImgNotMax()">&gt;</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t<br/>\r\n\r\n\t\t\t\t<div class="row" ng-repeat="str in strImg">\r\n\t\t\t\t\t<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" \r\n\t\t\t\t\t\tng-repeat="img in strImg[$index]">\r\n\t\t\t\t\t<img ng-src="{{img}}" class="img-responsive" ng-click="changeImg(img)" >\r\n\t\t\t\t\t<br/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-lg-6 col-md-6 col-sm-8 col-xs-12 marks">\r\n\t\t\t\t<h3>{{article.title}}</h3>\r\n\t\t\t\t<p>{{article.article}}</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-lg-1 col-md-1"></div>\t\r\n\t\t</div>\r\n\t</div>');
$templateCache.put('templates/country.html','\t<header>\r\n\t\t<div class="container-fluid">\r\n\t\t\t<div class="row menu">\r\n\r\n\t\t\t\t<div class="col-lg-1  hidden-md hidden-sm hidden-xs">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">\r\n\t\t\t\t\t<a href="#">#Alohafriends</a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-1 col-md-2 col-sm-2 col-xs-12 menu-element">\r\n\t\t\t\t\t<a href="#">\u041E \u043D\u0430\u0441</a>\r\n\t\t\t\t\t<div class="menu-element-list">\r\n\t\t\t\t\t\t<a href="#">\u041D\u0430\u0441\u0442\u044F</a><br/>\r\n\t\t\t\t\t\t<a href="#">\u0414\u0430\u043D\u0438\u043B</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-1 col-md-2 col-sm-2 col-xs-12 menu-element">\r\n\t\t\t\t\t<a href="#">\u0414\u043D\u0435\u0432\u043D\u0438\u043A</a>\r\n\t\t\t\t\t<div class="menu-element-list">\r\n\t\t\t\t\t\t<a href="#/country/maldives">\u041C\u0430\u043B\u044C\u0434\u0438\u0432\u044B</a><br/>\r\n\t\t\t\t\t\t<a href="#">\u0428\u0440\u0438-\u041B\u0430\u043D\u043A\u0430</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-1 col-md-2 col-sm-2 col-xs-12">\r\n\t\t\t\t\t<a href="#">\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u044B</a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-1 col-md-2 col-sm-1 col-xs-12">\r\n\t\t\t\t\t<a href="#">\u0421\u0432\u044F\u0437\u044C</a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-2">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-2 col-md-2 col-sm-3 col-xs-12">\r\n\t\t\t\t\t<a href="#"><div class="sprite sprite-vk"></div></a>\r\n\t\t\t\t\t<a href="#"><div class="sprite sprite-fb"></div></a>\r\n\t\t\t\t\t<a href="#"><div class="sprite sprite-in"></div></a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-1 hidden-md hidden-sm hidden-xs">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t\t<br/><br/><br/><br/><br/><br/><br/><br/><br/>\r\n\t\t\t<br/>\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-lg-12 name-country">\r\n\t\t\t\t\t<span>{{country.country}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\t\r\n\t</header>\r\n\t\r\n\t</br>\r\n\t</br>\r\n\r\n\t<div class="container-fluid main country">\r\n\t\t<div class="row" ng-repeat="article in articles">\r\n\t\t\t<div class="col-lg-1 col-md-1"></div>\r\n\t\t\t<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">\r\n\t\t\t\t<img ng-src="{{article.picture}}" class="img-responsive">\r\n\t\t\t\t<br/>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-lg-6 col-md-6 col-sm-8 col-xs-12 marks">\r\n\t\t\t\t<a ng-href="#/country/{{article.countryId}}/{{article.articleId}}">\r\n\t\t\t\t\t<h3>{{article.title}}</h3>\r\n\t\t\t\t</a>\r\n\t\t\t\t<p>{{article.article}}</p>\r\n\t\t\t\t<h3>\u041C\u0435\u0442\u043A\u0438:</h3>\r\n\t\t\t\t<a class="marker" ng-repeat="mark in article.marks">{{mark}}&nbsp;</a>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-lg-1 col-md-1"></div>\t\r\n\t\t</div>\r\n\t</div>\r\n');
$templateCache.put('templates/home.html','\t<header>\r\n\t\t<div class="container-fluid">\r\n\t\t\t<div class="row menu">\r\n\r\n\t\t\t\t<div class="col-lg-1  hidden-md hidden-sm hidden-xs">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 ">\r\n\t\t\t\t\t<a href="#/home">#Alohafriends</a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-1 col-md-2 col-sm-2 col-xs-12 menu-element">\r\n\t\t\t\t\t<a href="#">\u041E \u043D\u0430\u0441</a>\r\n\t\t\t\t\t<div class="menu-element-list">\r\n\t\t\t\t\t\t<a href="#">\u041D\u0430\u0441\u0442\u044F</a><br/>\r\n\t\t\t\t\t\t<a href="#">\u0414\u0430\u043D\u0438\u043B</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-1 col-md-2 col-sm-2 col-xs-12 menu-element">\r\n\t\t\t\t\t<a href="#">\u0414\u043D\u0435\u0432\u043D\u0438\u043A</a>\r\n\t\t\t\t\t<div class="menu-element-list">\r\n\t\t\t\t\t\t<a href="#/country/maldives">\u041C\u0430\u043B\u044C\u0434\u0438\u0432\u044B</a><br/>\r\n\t\t\t\t\t\t<a href="#">\u0428\u0440\u0438-\u041B\u0430\u043D\u043A\u0430</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-1 col-md-2 col-sm-2 col-xs-12">\r\n\t\t\t\t\t<a href="#">\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u044B</a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-1 col-md-2 col-sm-1 col-xs-12">\r\n\t\t\t\t\t<a href="#">\u0421\u0432\u044F\u0437\u044C</a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-2 hidden-md hidden-sm hidden-xs">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-2 col-md-2 col-sm-3 col-xs-12">\r\n\t\t\t\t\t<a href="#"><div class="sprite sprite-vk"></div></a>\r\n\t\t\t\t\t<a href="#"><div class="sprite sprite-fb"></div></a>\r\n\t\t\t\t\t<a href="#"><div class="sprite sprite-in"></div></a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-lg-1 hidden-md hidden-sm hidden-xs">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t\t<br/>\r\n\t\t\t<br/>\r\n\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-lg-12 name-center">\r\n\t\t\t\t\t<span>#ALOHAFRIENDS</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-lg-12 advertising">\r\n\t\t\t\t\t<span>Wedding travel around the world</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<br/><br/><br/><br/><br/>\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-lg-12">\r\n\t\t\t\t\t<button class="button-header">Welcome</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\t\r\n\t</header>\r\n\t\r\n\t</br>\r\n\t</br>\r\n\r\n\t<div class="container-fluid main home">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-lg-1 col-md-1"></div>\r\n\t\t\t<div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 about">\r\n\t\t\t\t<h1>\u041E \u043D\u0430\u0441</h1>\r\n\t\t\t\t<h3>Aloha friends!</h3>\r\n\t\t\t\t<p>\u041A\u0430\u0436\u0435\u0442\u0441\u044F, \u0441\u043E\u0432\u0441\u0435\u043C \u043D\u0435\u0434\u0430\u0432\u043D\u043E \u043C\u044B \u041D\u0430\u0441\u0442\u044F \u0438 \u0414\u0430\u043D\u044F \u0441\u043E\u0437\u0434\u0430\u043B\u0438 \u0441\u0432\u043E\u044E \u0441\u0435\u043C\u044C\u044E. \u0426\u0435\u043B\u044B\u0439 \u0433\u043E\u0434 \u0436\u0438\u043B\u0438 \u0432 \u0434\u0443\u0448\u043D\u043E\u043C \u0433\u043E\u0440\u043E\u0434\u0435, \u0445\u043E\u0434\u0438\u043B\u0438 \u043D\u0430 \u043D\u0435\u043B\u044E\u0431\u0438\u043C\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443, \u0434\u0435\u043B\u0430\u043B\u0438 \u0442\u043E, \u0447\u0442\u043E \u043D\u0430\u043C \u0433\u043E\u0432\u043E\u0440\u0438\u043B\u0438 \u201C\u0431\u043E\u0441\u0441\u044B\u201D. \u041F\u043E\u0441\u043B\u0435 \u0433\u043E\u0434\u0430 \u0442\u0430\u043A\u043E\u0439 \u0436\u0438\u0437\u043D\u0438 \u043C\u044B \u043F\u043E\u043D\u044F\u043B\u0438, \u0447\u0442\u043E \u043D\u0435 \u0445\u043E\u0442\u0438\u043C \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u0443\u044E \u0436\u0438\u0437\u043D\u044C, \u0442\u0440\u0430\u0442\u044F \u0431\u0435\u0441\u0446\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F. \u0418 \u043C\u044B \u043F\u0440\u0438\u043D\u044F\u043B\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0441\u0435 \u0438 \u0443\u0435\u0445\u0430\u0442\u044C \u0432 \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u043F\u043E \u043C\u0438\u0440\u0443! \u041D\u0430 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u0438\u044F \u043C\u044B \u043A\u0443\u043F\u0438\u043B\u0438 \u0440\u044E\u043A\u0437\u0430\u043A\u0438, \u043F\u0430\u043B\u0430\u0442\u043A\u0443, \u0431\u0438\u043B\u0435\u0442\u044B \u043D\u0430 \u0441\u0430\u043C\u043E\u043B\u0435\u0442 \u0432 \u043E\u0434\u0438\u043D \u043A\u043E\u043D\u0435\u0446 \u0432 \u0440\u0430\u0439\u0441\u043A\u0438\u0439 \u0443\u0433\u043E\u043B\u043E\u043A \u0437\u0435\u043C\u043B\u0438 \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438\u0441\u044C \u0432 \u043F\u0443\u0442\u044C \u043A\u043E\u043B\u0435\u0441\u0438\u0442\u044C \u043F\u043E \u043C\u0438\u0440\u0443. \u041C\u044B \u0434\u0430\u0432\u043D\u043E \u043C\u0435\u0447\u0442\u0430\u043B\u0438 \u043E \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u043C \u0441\u0432\u0430\u0434\u0435\u0431\u043D\u043E\u043C \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0438, \u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438\u0441\u044C \u0432 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 Wedding travel aroud the World. \u041D\u0430 \u043D\u0430\u0448\u0435\u043C \u0441\u0430\u0439\u0442\u0435 \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0439\u0442\u0438 \u0432\u043F\u0435\u0447\u0430\u0442\u043B\u044F\u044E\u0449\u0438\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0438\u0437 \u0440\u0430\u0437\u043D\u044B\u0445 \u0443\u0433\u043E\u043B\u043A\u043E\u0432 \u043F\u043B\u0430\u043D\u0435\u0442\u044B, \u043A\u0440\u0443\u0442\u044B\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u0438 \u043C\u043D\u043E\u0433\u043E-\u043C\u043D\u043E\u0433\u043E \u0432\u0438\u0434\u0435\u043E, \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0441 \u043B\u0435\u0433\u043A\u043E\u0441\u0442\u044C\u044E \u043C\u043E\u0436\u043D\u043E \u043E\u043A\u0443\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043D\u0430\u043C\u0438!</p>\r\n\t\t\t\t<p>\u041F\u043E\u0433\u043D\u0430\u043B\u0438!</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-lg-1 col-md-1"></div>\r\n\t\t\t<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 marks">\r\n\t\t\t\t<h1>\u041C\u0435\u0442\u043A\u0438:</h1>\r\n\t\t\t\t<a class="marker" ng-repeat="mark in marks" ng-href="{{mark.link}}">{{mark.name}}&nbsp;</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n');}]);