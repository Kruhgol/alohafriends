'use strict';

module.exports =
    angular.module('AlohaFriends', [
        'ngRoute',
        // modules
        require('./foo').name,
        //templates
        require('../../tmp/templates').name,
    ])