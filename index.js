class Shape {
  constructor(name) {
    this.name = name;
  }

  getInfo() {
    return `This is a ${this.name}.`;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }

  diagram() {
    return `
        . - ~ ~ ~ - .
      ,'             '.
     ,                 ,
    ,                   ,
    ,                   ,
     ,                 ,
      ',             ,'
        ' - . _ . - '
      `;
  }
}

class Square extends Shape {
  constructor(side) {
    super("Square");
    this.side = side;
  }

  area() {
    return this.side ** 2;
  }

  perimeter() {
    return 4 * this.side;
  }

  diagram() {
    return `
        +--------+
        |        |
        |        |
        |        |
        |        |
        +--------+
      `;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super("Triangle");
    this.base = base;
    this.height = height;
  }

  area() {
    return 0.5 * this.base * this.height;
  }

  perimeter() {
    // Assuming it's a right-angled triangle
    const hypotenuse = Math.sqrt(this.base ** 2 + this.height ** 2);
    return this.base + this.height + hypotenuse;
  }

  diagram() {
    return `
           /\\
          /  \\
         /    \\
        /      \\
       /        \\
      /__________\\
      `;
  }
}

module.exports = {
  Circle,
  Square,
  Triangle,
};
