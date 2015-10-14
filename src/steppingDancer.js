var SteppingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.noStep = false;

  this.$node.addClass('dancer steppingDancer');
};

SteppingDancer.prototype = Object.create(Dancer.prototype);

SteppingDancer.prototype.step = function()
{
  Dancer.prototype.step.call(this);

  var newTop = this.top + Math.floor(Math.random() * 40);
  var newLeft = this.left + Math.floor(Math.random() * 40);

  if (this.noStep) {
    newLeft = 0;
  }

  Dancer.prototype.setPosition.call(this, newTop, newLeft);
};

SteppingDancer.prototype.constructor = SteppingDancer;
