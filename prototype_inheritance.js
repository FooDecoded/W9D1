Function.prototype.inherits = function(parent) {
  function Surrogate () {};
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject() { }

function Ship() { }
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);

// Ship.prototype.foo = () => console.log('ship only')

// Second Version
Function.prototype.inherits = function(parent) {
  this.prototype = Object.create(parent.prototype)
}