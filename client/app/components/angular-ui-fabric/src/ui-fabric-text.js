(function() {

  'use strict';

  angular.module('ui.fabric')
    .service('fabricText', fabricText);

  /*
   * Use $inject to manually identify your dependencies for Angular components.
   * This technique mirrors the technique used by ng-annotate, for automating the creation of minification safe
   * dependencies. If ng-annotate detects injection has already been made, it will not duplicate it.
   */

  fabricText.$inject = ['$log', 'fabricService', 'fabricWindow'];

  function fabricText($log, fabricService, fabricWindow) {

    var service = this;

    service.textDefaults = null;

    $log.info('fabricText');

    service.init = function () {

      $log.info('fabricText - init()');

      service.textDefaults = fabricService.getTextDefaults();
    };

    //
    // Text
    //

    /**
     * @name text
     * @desc Adds a text object to the canvas
     * @param {String} text - The text to render on the canvas
     * @param {Object} [options] A configuration object, defaults to textDefaults
     */
    service.text = function(text, options) {

      $log.info('fabricText - text()');

      text = text || 'New Text';
      options = options || service.textDefaults;

      $log.info('fabric - addText() - options.fontSize: ' + options.fontSize);

      return new fabricWindow.Text(text, options);
    };

    service.init();

    return service;

  }

})();

// $log.info('service.canvas: ' + JSON.stringify(['e', service.canvas], null, '\t'));
