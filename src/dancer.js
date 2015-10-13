// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span></span>');
  this.timeBetweenSteps = timeBetweenSteps;

  this.setPosition(top, left);
  this.step();
};

Dancer.prototype.step = function(){
  var context = this;

  setTimeout( function() {
    context.step.call(context) },
    context.timeBetweenSteps );
}

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    'top': top,
    'left': left
  };

  this.$node.css(styleSettings);
};
