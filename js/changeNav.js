// 导航栏清楚函数
function changeNavType(navChild, i , activeTpe) {
	for(let j = 0; j < navChild.length; j++) {
		navChild[j].children[0].classList.remove(activeTpe);
	}
	navChild[i].children[0].classList.add(activeTpe)
}

// tween.js代码
function animate(time) {
	requestAnimationFrame(animate);
	TWEEN.update(time);
}
requestAnimationFrame(animate);

for(let i = 0; i < nav.children.length; i++) {
	let href = nav.children[i].children[0].getAttribute('href');
	let element = document.querySelector(href);
	ItemList.push(element)
	let elementTop = null
	if(element) {
		elementTop = element.offsetTop - nav.children[i].offsetHeight;
	} 
	navChildList.push(elementTop)
	scroTop(topNavBar);
	nav.children[i].onmouseenter = function(e) {
		changeNavType(nav.children, i, 'active')
	}
	nav.children[i].onmouseleave = function() {
		nav.children[i].children[0].classList.remove('active')
	}
	nav.children[i].onclick = function(e){
		e.preventDefault()
		clearInterval(scrollTie)
		let elementTop = navChildList[i]
		// 页面滑动
		var position = {y: window.scrollY };
		var tween = new TWEEN.Tween(position);
		tween.to({ y: elementTop }, 1000);
		tween.easing(TWEEN.Easing.Cubic.InOut)
		window.scrollTo(0, (element.offsetTop - this.offsetHeight))
		tween.onUpdate(function() {
			window.scrollTo(0,position.y) 
		});
		tween.start();
	}
}
