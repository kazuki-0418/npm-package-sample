# geometric-shapes

A module for working with geometric shapes, including area and perimeter calculations and ASCII art diagrams.

## Installation

```
npm install geometric-shapes
```

## Usage

```javascript
const { Circle, Square, Triangle } = require("geometric-shapes");

const circle = new Circle(5);
console.log(circle.getInfo());
console.log(`Area: ${circle.area().toFixed(2)}`);
console.log(`Perimeter: ${circle.perimeter().toFixed(2)}`);
console.log(circle.diagram());

const square = new Square(4);
console.log(square.getInfo());
console.log(`Area: ${square.area()}`);
console.log(`Perimeter: ${square.perimeter()}`);
console.log(square.diagram());

const triangle = new Triangle(3, 4);
console.log(triangle.getInfo());
console.log(`Area: ${triangle.area()}`);
console.log(`Perimeter: ${triangle.perimeter().toFixed(2)}`);
console.log(triangle.diagram());
```

## API

### Circle(radius)

- `area()`: Calculates the area of the circle
- `perimeter()`: Calculates the circumference of the circle
- `diagram()`: Returns an ASCII art representation of a circle

### Square(side)

- `area()`: Calculates the area of the square
- `perimeter()`: Calculates the perimeter of the square
- `diagram()`: Returns an ASCII art representation of a square

### Triangle(base, height)

- `area()`: Calculates the area of the triangle
- `perimeter()`: Calculates the perimeter of the triangle (assumes right-angled)
- `diagram()`: Returns an ASCII art representation of a triangle

All shapes also have a `getInfo()` method that returns a description of the shape.
