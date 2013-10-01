angular.module('common.services.communicator', [])
  .factory('Communicator', function($rootScope) {

    var communicator = {};

    /**
     * channel, event namespace
     * for broadcasting and listening
     */
    communicator.CHANNEL = '__COMMUNICATOR_SERVICE__';

    /**
     * packet to be sent
     */
    communicator.packet = '';

    communicator.send = function(packet) {
      communicator.packet = packet;
      $rootScope.$broadcast(communicator.CHANNEL);
    };

    return communicator;
  });
