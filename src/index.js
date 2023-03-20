// This will call all necessary functions
// So it imports everything

import "./home/home.css";
import "./menu/menu.css";
import "./contact/contact.css"
import * as home from "./home/home.js";
import menuHTML from "./menu/menu.js";
import contactHTML from "./contact/contact.js";


function render(content, id, classs) {
	const element = document.createElement("div");
	element.id = id;

	element.innerHTML = content;

	if (arguments[2] !== undefined) {
		element.classList.add(arguments[2]);
	}

	return element;
}

document.body.appendChild(render(home.headerHTML, 'header'));
document.body.appendChild(render(home.backgroundContentHTML, 'container'));
document.querySelector('#container').appendChild(render(home.homeContentHTML, 'over-img-home', 'over-img'));
document.body.appendChild(render(home.footerHTML, 'footer'));


const links = document.getElementById("links");
links.addEventListener("click", (e) => {
	const overImage = document.querySelector('.over-img');
	const container = document.querySelector('#container');

	switch (e.target.textContent) {
		case "Home":
			overImage.remove();
			container.appendChild(render(home.homeContentHTML, 'over-img-home', 'over-img'));
			home.addActiveClass('#home');
			break;
		case "Menu":
			overImage.remove();
			container.appendChild(render(menuHTML, 'over-img-menu', 'over-img'));
			home.addActiveClass('#menu');
			break;
		case "Contact":
			overImage.remove();
			container.appendChild(render(contactHTML, 'over-img-contact', 'over-img'));
			home.addActiveClass('#contact');
			break;
		default:
			// statements_def
			break;
	}
});
