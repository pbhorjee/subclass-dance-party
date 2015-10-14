var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('dancer blinkyDancer');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);

  this.$node.css("border-color", Dancer.prototype.getRandomHue());

  this.$node.toggle();
};

BlinkyDancer.prototype.constructor = BlinkyDancer;
