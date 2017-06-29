'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('main', {
    url: '/',
    template: '<main></main>'
  });
  $stateProvider.state('configDetail', {
    url: '/config/{configId}',
    template: '<detail></detail>'
  });
}
