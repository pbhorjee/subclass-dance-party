$(document).ready(function() {
  window.dancers = [];

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var jiggyDancerClassName = $(this).data("jiggy-dancer-class-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];

    if (dancerMakerFunction) {
      var dancer = new dancerMakerFunction(
        $("#dance-floor").height() * Math.random(),
        $("#dance-floor").width() * Math.random(),
        Math.random() * 1000,
        jiggyDancerClassName
      );

      dancer.$node.click(function(event) {
        console.log('clicked');
      });

      window.dancers.push(dancer);

      $('#dance-floor').append(dancer.$node);
    }
  });

  $("#line-up").on("click", function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].noStep !== 'undefined') {
        window.dancers[i].noStep = true;
      }
    }

    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(window.dancers[i].top, 0);
    };
  });
});

var handleDancerClick = function () {
  console.log('hello click');
}
