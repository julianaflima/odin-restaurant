const headerHTML = `<h1 id="name">Sage Bistro</h1>
<ul id="links"> 
	<li id="home" class="active">Home</li> 
	<li id="menu">Menu</li>
	<li id="contact">Contact</li>
</ul>`;

const backgroundContentHTML = `<div id="images">
	<img class="img-not-center" src="../src/img/pepperjack-pizza-sweetpotato-bbqsprouts-ryebread-nacho-sandwich-106-800x888.jpg.webp">
	<img class="img-center" src="../src/img/IMG_6556-e1639344180167.jpg.webp" alt="">
	<img class="img-center" src="../src/img/WarmSpinachSaladwithFigsandRoastedButternutSquash-e1639343923863.jpg.webp" alt="">
	<img src="../src/img/Pumpkin-Vegan-Crème-Brûlée-780x1170.jpg.webp">
</div>`; 

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
	backgroundContentHTML,
	homeContentHTML,
	footerHTML,
	addActiveClass
};
