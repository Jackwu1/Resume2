!function () {
	let view = {
		workLi: document.querySelectorAll('#workChild > li'),
		inlineBar: document.querySelector('#inlineBar')
	}
	let controller = {
		view: null,
		init() {
			this.view = view;
			let _this = this;
			for(let i = 0; i < this.view.workLi.length; i++){
				this.view.workLi[i].onclick = function(){
					if(i === 0) {
						_this.view.inlineBar.className = 'stat1';
					}else if(i === 1){
						_this.view.inlineBar.className = 'stat2';
					}else if(i === 2){
						_this.view.inlineBar.className = 'stat3';
					}
				}
			}
		}
	}
	controller.init()
}.call()
