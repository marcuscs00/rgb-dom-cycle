let colorArray = [["red", 0], ["green", 1], ["blue", 2]];

let count = 1;            

function domManipulation() {
	let initialHeader = document.getElementById('initial-header');

	initialHeader.style.color = colorArray[count][0];

	++count;

	if (count === 3) {
		count = 0;
	}
}

