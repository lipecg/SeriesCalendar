(function(){
    'use strict';
    
    angular
        .module('app.series')
        .controller('SeriesController', SeriesController);
    
    SeriesController.$inject = ['$firebaseArray'];
    
    function SeriesController($firebaseArray) {
        var vm = this;
        
        var fireSeries = new Firebase('https://seriescalendar.firebaseio.com/series');
        
        function Series(tvdbId, name, overview, status, genre, actors, imdbId, language, airsDayOfWeek, airsTime, runtime, 
                         network, contentRating, banner, poster, firstAired, zap2itId, lastUpdated) {
            this.tvdbId = tvdbId;
            this.name = name;
            this.overview = overview || null;
            this.status = status || null;
            this.genre = genre || null;
            this.actors = actors || null;
            this.imdbId = imdbId || null;
            this.language = language || null;
            this.airsDayOfWeek = airsDayOfWeek || null;
            this.airsTime = airsTime || null;
            this.runtime = runtime || null;
            this.network = network || null;
            this.contentRating = contentRating || null;
            this.banner = banner || null;
            this.poster = poster || null;
            this.firstAired = firstAired || null;
            this.zap2itId = zap2itId || null;
            this.lastUpdated = lastUpdated || null;
        }
        
        vm.isAdd = false;
        vm.toggleIsAdd = toggleIsAdd;
        vm.newSeries = new Series();
        vm.series = $firebaseArray(fireSeries);
        
        vm.addSeries = addSeries;
        
        function addSeries() {
            vm.series.$add(vm.newSeries);
            vm.newSeries = new Series();
            vm.isAdd = false;
        }
        
        function toggleIsAdd() {
            vm.isAdd = !vm.isAdd;
        }
    }
})();


/*
http://thetvdb.com/api/3794FF90172723AD/series/80379/all/en.xml
var baseTvDbUrl = 'http://thetvdb.com/api';
var apiId = '3794FF90172723AD';
var getSerieUrl = baseTvDbUrl + '/' + apiId + '/series/{serieId}/all/en.xml';
var searchSerieUrl = baseTvDbUrl + '/GetSeries.php?seriesname={seriesName}';
*/