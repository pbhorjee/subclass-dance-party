var CareltonDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, 1500);
  this.$node = $('<span><img class="careltonDancer shake-slow shake-constant" src="http://i.giphy.com/wn8rVP7qC8TNC.gif"></span>');
  this.$node.css("top", this.top);
  this.$node.css("left", this.left);

  this.$node.addClass('dancer careltonDancer');
};

CareltonDancer.prototype = Object.create(Dancer.prototype);

// CareltonDancer.prototype.step = function()
// {
//   Dancer.prototype.step.call(this);

//   this.$node.toggle();
// };

CareltonDancer.prototype.constructor = CareltonDancer;
