// ES6 JS Classes
// blueprint of an entity/thing/model
// custom types
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width; // b.length * b.width
  }

}

// create an instance rect of the class Rectangle
// const str = "hello world";
const rect = new Rectangle(2, 3);
// console.log(rect.area());

// A Box is a particular type of Rectangle
// Box is a child/derived class of the parent class Rectangle
class Box extends Rectangle {
  constructor(length, width, height) {
    super(length, width);
    this.height = height;
  }

  volume() {
    return this.area() * this.height; // xxx.area() * xxx.height
  }
}

const b = new Box(3, 4, 5);
console.log(b.volume());

// The meaning of "this", or what it references, depends at run time on who is calling the function
const standAloneVolumeFunc = b.volume;
console.log(standAloneVolumeFunc());