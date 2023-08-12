// const Rectangle = class {}
// class declaration - most common

// Blueprint or a custom type, holds some data and some behavior
// 2D shape with length, width
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;

  }

  // instance method
  area() {
    return this.length * this.width;
  }

}

// Rectangle with an extra dimension: height
class Box extends Rectangle {
  constructor(width, length, height) {
    super(width, length);

    this.height = height;
    this.volume = this.volume.bind(this);
  }

  volume() {
    return this.area() * this.height;
  }
}

const box1 = new Box(3,4,5);

const volume2 = box1.volume;
console.log(volume2());

