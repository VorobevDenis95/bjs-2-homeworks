function parseCount(count) {
  let result = Number.parseFloat(count);
  let error = new Error("Невалидное значение");
  if (Number.isNaN(result)) {
    throw error;
  } else {
    return result;
  }
}

function validateCount(count) {
  try {
    let result = parseCount(count);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    const semifPerimetr = this.perimeter * 0.5;
    return Number(
      Math.sqrt(
        semifPerimetr *
          (semifPerimetr - this.a) *
          (semifPerimetr - this.b) *
          (semifPerimetr - this.c)
      ).toFixed(3)
    );
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
