type Circle = {
	shape: "circle";
	radius: number;
};

type Rectangle = {
	shape: "rectangle";
	width: number;
	height: number;
};

function calculateShapeArea(shape: Circle | Rectangle): number {
	if (shape.shape === "circle") {
		const circleArea = Math.PI * shape.radius * shape.radius;
		return parseFloat(circleArea.toFixed(2));
	} else {
		const rectangleArea = shape.width * shape.height;
		return rectangleArea;
	}
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);

const rectangleArea = calculateShapeArea({
	shape: "rectangle",
	width: 4,
	height: 6,
});

console.log(rectangleArea);
