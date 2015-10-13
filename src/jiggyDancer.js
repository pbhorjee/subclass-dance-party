var JiggyDancer = function(top, left, timeBetweenSteps, jiggyDancerClassName) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass(jiggyDancerClassName + ' shake-constant jiggyDancer');
};

JiggyDancer.prototype = Object.create(Dancer.prototype)

JiggyDancer.prototype.constructor = JiggyDancer;
