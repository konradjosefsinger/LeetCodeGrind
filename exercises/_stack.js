function Stack () {
  this.storage = {};
  this.length = 0;

  this.push = function (value) {
    this.length++;
    this.storage[this.length] = value;
    return true;
  };

  this.pop = function () {
    if (this.length) {
      const res = this.storage[this.length];
      delete this.storage[this.length];
      this.length--;
      return res;
    }
    return null;
  };

  this.size = function () {
    return this.length;
  };
};

const myStack = new Stack ();

myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.pop());
console.log(myStack.size());

// *** *** *** *** *** //

// *** *** *** *** *** //

function ProtoStack () {
  this.storage = {};
  this.length = 0;
};

ProtoStack.prototype.push = function (value) {
  this.length++;
  this.storage[this.length] = value;
  return true;
};

ProtoStack.prototype.pop = function () {
  if (this.length) {
    const res = this.storage[this.length];
    delete this.storage[this.length];
    this.length--;
    return res;
  }
  return null;
}

ProtoStack.prototype.size = function () {
  return this.length;
}