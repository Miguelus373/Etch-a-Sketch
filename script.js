const screen = document.querySelector('#screen');
const cleanBtn = document.querySelector('#clear');
const resizeBtn = document.querySelector('#resize');
const colorBtn = document.querySelector('#colors');

let squares = 16;

function createDiv(n) {

	for (let i = 0; i < n; i++) {
		
		let size = 400 / squares + 'px';
		let hDiv = document.createElement('div');
		hDiv.classList.add('column');

		for (let i = 0; i < n; i++) {
			let vDiv = document.createElement('div');
			vDiv.classList.add('cell');
			hDiv.appendChild(vDiv);

			vDiv.addEventListener('mouseenter', () => {
				vDiv.style.backgroundColor = currentColor()
			})

			vDiv.style.width = size;
			vDiv.style.height = size;

		}

		screen.appendChild(hDiv);
	}
	return('Screen created');
}

cleanBtn.addEventListener('click', () => clear())

function clear() {

	for (let i = 0; i < squares; i++) {
		screen.removeChild(screen.lastChild);
	}

	createDiv(squares);

	return('Screen cleared')
}

resizeBtn.addEventListener('click', () => resize());

function resize() {
	for (let i = 0; i < squares; i++) {
		screen.removeChild(screen.lastChild);
	};	
	squares = prompt('How many squares?');
	createDiv(squares);
	return('Screen resized')
}

colorBtn.addEventListener('click', () => {
	if (colorBtn.innerText == 'Black') {
		colorBtn.innerText ='Colored'
	} else {
		colorBtn.innerText = 'Black'
	}
})

function currentColor() {

	let color;
	
	if (colorBtn.innerText == 'Black') {
	color = 'rgb(' + Math.random() * 256 + ', ' + Math.random() * 256 + ', ' + Math.random() * 256 + ')';
	
	} else {
		color = 'black'
	}

	return(color)
}

console.log(createDiv(squares));