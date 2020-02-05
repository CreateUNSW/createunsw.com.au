$(document).ready(function() {
    matchHeight.init();
  });

var matchHeight = function () {

    function init() {
      eventListeners();
      matchHeight();
    }

    function eventListeners(){
      $(window).on('resize', function() {
        matchHeight();
      });
    }

    function matchHeight(){
      var groupName = $('.columns');
      var groupHeights = [];

      groupName.css('min-height', 'auto');

      groupName.each(function() {
        groupHeights.push($(this).outerHeight());
      });

      var maxHeight = Math.max.apply(null, groupHeights);
      groupName.css('min-height', maxHeight);
    };

    return {
      init: init
    };

  } ();