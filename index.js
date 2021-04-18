let colorArray = ["red", "green", "blue"];

let count = 0;

function domManipulation() {
	let initialHeader = document.getElementById('initial-header');

	initialHeader.style.color = colorArray[count];

	++count;

	if (count === 3) {
		count = 0;
	}
}

