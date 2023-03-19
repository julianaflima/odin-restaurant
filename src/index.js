import './style.css';

function component() {
	const element = document.createElement('h1');

	element.textContent = 'Cool Name';
	// element.id = 'name';

	return element;
}

const container = document.querySelector('#content');
container.appendChild(component());