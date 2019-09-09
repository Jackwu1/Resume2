for(let i = 0; i < workLi.length; i++){
	workLi[i].onclick = function(){
		if(i === 0) {
			inlineBar.className = 'stat1';
		}else if(i === 1){
			inlineBar.className = 'stat2';
		}else if(i === 2){
			inlineBar.className = 'stat3';
		}
	}