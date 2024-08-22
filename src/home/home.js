import ImageOne from '../img/1.png';
import ImageTwo from '../img/2.png';
import ImageThree from '../img/3.png';
import ImageFour from '../img/4.png';



const headerHTML = `<h1 id="name">Sage Bistro</h1>
<ul id="links"> 
	<li id="home" class="active">Home</li> 
	<li id="menu">Menu</li>
	<li id="contact">Contact</li>
</ul>`;

// const backgroundContentHTML = `<div id="images">
// 	<img class="img-not-center" src="">
// 	<img class="img-center" src="" alt="">
// 	<img class="img-center" src="" alt="">
// 	<img src="">
// </div>`; 


function addImage(ImgName, node, classs) {

	const newImage = new Image();
	newImage.src = ImgName;

	if (arguments[2] !== undefined) {
		newImage.className = classs;
	}

	node.appendChild(newImage);

}


const backgroundImage = document.createElement("div");
backgroundImage.id = "container";
backgroundImage.appendChild(document.createElement("div"));
backgroundImage.firstChild.id = "images";
addImage(ImageOne, backgroundImage.firstChild, 'img-not-center');
addImage(ImageTwo, backgroundImage.firstChild, 'img-center');
addImage(ImageThree, backgroundImage.firstChild, 'img-center');
addImage(ImageFour, backgroundImage.firstChild);


const homeContentHTML = `<p>Passionate about making vegan food look and taste good</p>
	<p> We are open Monday--Friday</p>
	<p>10am -- 8pm</p>`;

const footerHTML = `<div id="footer"> Copyright &#169; 2023 <a href="https://github.com/julianaflima">julianaflima</a> </div>`;

function addActiveClass(id) {
	const activeLinks = document.querySelectorAll('#links .active');
	for (const link of activeLinks) {
		link.classList.remove('active');
	}

	const element = document.querySelector(id);
	element.classList.add('active');
}



export {
	headerHTML,
	// backgroundContentHTML,
	backgroundImage,
	homeContentHTML,
	footerHTML,
	addActiveClass
};
