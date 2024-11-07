### Q: Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

Ans: Type guards, specifically when using TypeScript, are needed to restrict the type of a variable within a conditional block allowing capturing the behavior of the code at runtime. This is important because it helps TypeScript avoid most bugs that may occur at a later stage.

### Some Examples of Type Guards and Their Use Cases

1. `typeof` Type Guard

- Use Case: Used to check the type of a primitive value (e.g., `string`, `number`, `boolean`).

- Example:

  function printValue(value: string | number) {
  if (typeof value === "string") {
  console.log(`String value: ${value}`);
  } else {
  console.log(`Number value: ${value}`);
  }
  }

2. `in` Type Guard

- Use Case: Used to check if an object has a specific property.
- Example:

  interface Bird {
  fly: () => void;
  }

  interface Fish {
  swim: () => void;
  }

  function move(animal: Bird | Fish) {
  if ("fly" in animal) {
  animal.fly();
  } else {
  animal.swim();
  }
  }

3. User-Defined Type Guards

- Use Case: Custom functions that return a type predicate to narrow down the type.

- Example:

  interface Car {
  drive: () => void;
  }

  interface Boat {
  sail: () => void;
  }

  function isCar(vehicle: Car | Boat): vehicle is Car {
  return (vehicle as Car).drive !== undefined;
  }

  function operate(vehicle: Car | Boat) {
  if (isCar(vehicle)) {
  vehicle.drive();
  } else {
  vehicle.sail();
  }
  }
