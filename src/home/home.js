const headerHTML = `<h1 id="name">Sage Bistro</h1>
<ul id="links"> 
	<li id="home" class="active">Home</li> 
	<li id="menu">Menu</li>
	<li id="contact">Contact</li>
</ul>`;

const backgroundContentHTML = `<div id="images">
	<img class="img-not-center" src="../src/img/1.webp">
	<img class="img-center" src="../src/img/2.webp" alt="">
	<img class="img-center" src="../src/img/3.webp" alt="">
	<img src="../src/img/4.webp">
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
