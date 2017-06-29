import angular from 'angular';
import uiRouter from 'angular-ui-router';

export class ConfigDetailController {
  $http;
  $stateParams;
  config;
  /*@ngInject*/
  constructor($http, $stateParams) {
    this.$http = $http;
    this.$stateParams = $stateParams;
  }

  $onInit() {
    this.$http.get('/api/configs/' + this.$stateParams.configId)
      .then(response => {
        this.config = response.data;
      });
  }

}

export default angular.module('jsonConfigProviderApp.detail', [uiRouter])
  .component('detail', {
    template: require('./detail.html'),
    controller: ConfigDetailController
  })
  .name;
