var JiggyDancer = function(top, left, timeBetweenSteps, jiggyDancerClassName) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass(jiggyDancerClassName + ' shake-constant jiggyDancer dancer');
  this.$node.css("border-color", Dancer.prototype.getRandomHue());
};

JiggyDancer.prototype = Object.create(Dancer.prototype)

JiggyDancer.prototype.constructor = JiggyDancer;
