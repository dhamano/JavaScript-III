/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global/window binding default
* 2. implicit where this is bound to the object that contains it whatever's left of the dot
* 3. new binding when a constructor function is used
* 4. explicit binding of this to an object through .bind, .call, .apply
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const obj = {
  name: 'Bob',
  speak: function() {
    return `Greetings, my name is ${this.name}.`
  }
}
console.log(obj.speak());

// Principle 3

// code example for New Binding
function Person(attrs) {
  this.age = attrs.age,
  this.name = attrs.name,
  this.speak = function() {
    return `Hello, my name is ${this.name}.`
  }
}

const betty = new Person({
  age: 40,
  name: 'Betty'
});

console.log(betty.speak());

// Principle 4

// code example for Explicit Binding
function speakNow() {
  return `Hello, my name is ${this.name}.`
}
console.log(speakNow.call({name: 'Gus'}));