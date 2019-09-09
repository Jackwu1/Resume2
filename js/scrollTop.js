
// 页面初始化移除加载
function scroTop(dom) {
	if(window.scrollY > 0) {
		dom.classList.add('sticky')
	}else {
		dom.classList.remove('sticky')	
	}
	navChildList = [];
	let minIndex = 0;
	for(let i = 0; i < ItemList.length; i++) {
		if(ItemList[i]) {
			let elementTop = ItemList[i].offsetTop - nav.children[0].offsetHeight;
			navChildList.push(elementTop)
		}
	}
	for(let i = 0; i < navChildList.length; i++){
		if(navChildList[i]) {
			if(Math.abs(navChildList[i] - window.scrollY) <= Math.abs(navChildList[minIndex] - window.scrollY)) {
				minIndex = i
				ItemList[i].classList.add('active')
			}
			
		}
		if(minIndex === 1) {
			for(let i = 0; i < skillBar.length; i++) {
				skillBar[i].classList.add('active')
			}
		}	
	}
	changeNavType(nav.children, minIndex, 'activeScroll');
}