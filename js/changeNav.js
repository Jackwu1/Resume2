!function() {
	let view = {
		topNavBar: document.getElementById('topNavBar'),
		nav: document.getElementById('nav'),
		skillBar: document.getElementsByClassName('skillBar')
	}
	let controller = {
		view: null,
		init() {
			let _this = this;
			this.view = view;
			window.ItemList = []; //目前显示的主题
			window.navChildList = []; //nav下子集的高度
			let ItemList = window.ItemList;
			let navChildList = window.navChildList;
			
			window.onscroll = function () {
				// this.scroTop(topNavBar, navChildList, nav)
				_this.scroTop(_this.view.topNavBar, window.navChildList, window.nav, window.ItemList);
			}
			this.initAnimation();
			this.navChildren(this.view.nav, window.ItemList, window.navChildList)
		},
		// 初始化动画
		initAnimation: function(){
		  function animate(time) {
		   requestAnimationFrame(animate);
		   TWEEN.update(time);
		  }
		  requestAnimationFrame(animate);
		},
		// 导航栏清楚函数
		changeNavType(navChild, i , activeTpe) {
			for(let j = 0; j < navChild.length; j++) {
				navChild[j].children[0].classList.remove(activeTpe);
			}
			navChild[i].children[0].classList.add(activeTpe)
		},
		// 标题页签点击
		navChildren(nav, ItemList, navChildList) {
			let _this = this;
			for(let i = 0; i < nav.children.length; i++) {
				let href = nav.children[i].children[0].getAttribute('href');
				let element = document.querySelector(href);
				ItemList.push(element)
				let elementTop = null
				if(element) {
					elementTop = element.offsetTop - nav.children[i].offsetHeight;
				} 
				navChildList.push(elementTop)
				this.scroTop(_this.view.topNavBar, navChildList, nav, ItemList);
				nav.children[i].onmouseenter = function(e) {
					_this.changeNavType(nav.children, i, 'active')
				}
				nav.children[i].onmouseleave = function() {
					nav.children[i].children[0].classList.remove('active')
				}
				nav.children[i].onclick = function(e){
					e.preventDefault()
					// console.log(scrollTie, 'scrollTiescrollTie')
					// clearInterval(scrollTie)
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
			
		},
		// 页面初始化移除加载
		scroTop(dom, navChildList, nav, ItemList) {
			let _this = this;
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
					for(let i = 0; i < _this.view.skillBar.length; i++) {
						_this.view.skillBar[i].classList.add('active')
					}
				}	
			}
			this.changeNavType(nav.children, minIndex, 'activeScroll');
		}	
	}
	controller.init()
}.call()


// 导航栏清楚函数
// function changeNavType(navChild, i , activeTpe) {
// 	for(let j = 0; j < navChild.length; j++) {
// 		navChild[j].children[0].classList.remove(activeTpe);
// 	}
// 	navChild[i].children[0].classList.add(activeTpe)
// }
// 
// // tween.js代码
// function animate(time) {
// 	requestAnimationFrame(animate);
// 	TWEEN.update(time);
// }
// requestAnimationFrame(animate);
// 
// for(let i = 0; i < nav.children.length; i++) {
// 	let href = nav.children[i].children[0].getAttribute('href');
// 	let element = document.querySelector(href);
// 	ItemList.push(element)
// 	let elementTop = null
// 	if(element) {
// 		elementTop = element.offsetTop - nav.children[i].offsetHeight;
// 	} 
// 	navChildList.push(elementTop)
// 	scroTop(topNavBar);
// 	nav.children[i].onmouseenter = function(e) {
// 		changeNavType(nav.children, i, 'active')
// 	}
// 	nav.children[i].onmouseleave = function() {
// 		nav.children[i].children[0].classList.remove('active')
// 	}
// 	nav.children[i].onclick = function(e){
// 		e.preventDefault()
// 		clearInterval(scrollTie)
// 		let elementTop = navChildList[i]
// 		// 页面滑动
// 		var position = {y: window.scrollY };
// 		var tween = new TWEEN.Tween(position);
// 		tween.to({ y: elementTop }, 1000);
// 		tween.easing(TWEEN.Easing.Cubic.InOut)
// 		window.scrollTo(0, (element.offsetTop - this.offsetHeight))
// 		tween.onUpdate(function() {
// 			window.scrollTo(0,position.y) 
// 		});
// 		tween.start();
// 	}
// }
