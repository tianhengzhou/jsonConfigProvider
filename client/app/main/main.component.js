import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  $http;
  socket;
  configs = [];
  newConfig = '';
  newConfigName = '';
  publicONly = false;

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('config');
    });
  }

  $onInit() {
    this.$http.get('/api/configs')
      .then(response => {
        this.configs = response.data;
        this.socket.syncUpdates('config', this.configs);
      });
  }

  addConfig(){
    if (this.newConfig && this.newConfigName){
      this.$http.post('/api/configs', {
        name: this.newConfigName,
        config: JSON.parse(this.newConfig),
        publicConfig: this.publicConfig
      })
    }
  }

  deleteConfig(config){
    this.$http.delete('/api/configs/' + config._id);
  }
}

export default angular.module('jsonConfigProviderApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
