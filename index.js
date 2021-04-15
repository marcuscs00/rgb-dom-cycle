let colorArray = [["red", 0], ["green", 1], ["blue", 2]];

let count = 0;            

function domManipulation() {
	let header = document.getElementById('header');

	header.style.color = colorArray[count][0];

	++count;

	if (count === 3) {
		count = 0;
	}
}

