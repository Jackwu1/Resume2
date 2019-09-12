!function() {
	let view = document.querySelector('section.message');
	
	let model = {
		data: {
			newAVObj: new AV.Query('messageInfo'),
			msgArr: [],
		},
		init() {
			var APP_ID = '7oiJCWgnJ763g8Ik18kdmGAu-gzGzoHsz';
			var APP_KEY = 'TeD8RnyJqpSrQqdGT8CbxeBe';
			AV.init({
			  appId: APP_ID,
			  appKey: APP_KEY
			})
			this.initMsg()
		},
		initMsg() {
			let _this = this;
			// let query = this.data.newAVObj;
			var query = new AV.Query('messageInfo');
			query.find().then(function(val) {
				 for(let i = 0; i < val.length; i++) {
					 let obj = {};
					 obj.name = val[i].attributes.name
					 obj.content = val[i].attributes.content;
					 _this.data.msgArr.push(obj)
				 }
					controller.getMsg()
			})
		},
		save(name, content) {
			let _this = this;
			let Msg = AV.Object.extend('messageInfo');
			let info = new Msg();
			info.set('name', name);
			info.set('content', content)
			info.save().then(function(val) {
				console.log('dsadasdsadsadsads')
				// console.log('保存成功。objectId：' + todo.id)
			})
		}
	}
	
	let controller = {
		view: null,
		model: null,
		init() {
			this.view = view;
			this.model = model;
			this.model.init()
			this.bindEvents()
		},
		getMsg() {
			let peopleMessage = document.querySelector('#peopleMessage');
			for(let i = 0; i < this.model.data.msgArr.length; i++) {
				let li = document.createElement('li');
				li.innerHTML = `${this.model.data.msgArr[i].name} : ${this.model.data.msgArr[i].content}`;
				peopleMessage.appendChild(li);
			}
		},
		bindEvents() {
			let _this = this;
			let postMessageForm = document.querySelector('#postMessageForm');
			postMessageForm.addEventListener('submit', function(e){
				 e.preventDefault()
				 _this.saveMsg()
			})
		},
		saveMsg(){
			let name = document.getElementById('nameInput').value;
			let content = document.getElementById('textInput').value;
			this.model.save(name, content)
		}
	}
	controller.init()
}.call()

// var APP_ID = '7oiJCWgnJ763g8Ik18kdmGAu-gzGzoHsz';
// var APP_KEY = 'TeD8RnyJqpSrQqdGT8CbxeBe';
// 
// AV.init({
//   appId: APP_ID,
//   appKey: APP_KEY
// });

// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.set('name', 'wuzhenquan');
// testObject.set('content', 'dsadsadadsada');
// // testObject.save().then(function (testObject) {
// //   console.log('保存成功。')
// // })
//  var query = new AV.Query('TestObject');
//  query.find().then(function(obj) {
// 	 console.log(obj,'objobjobjobjobj');
// 	 // console.log(obj[0].attributes[])
//  })
//  
//  let postMessageForm = document.querySelector('#postMessageForm')
//  let nameInput = document.getElementById('nameInput');
//  let textInput = document.getElementById('textInput');
//  postMessageForm.addEventListener('submit', function(e){
// 	 e.preventDefault()
// 	 console.log(nameInput.value, 'nameInput.value')
// 	 console.log(textInput.value, 'textInput.value')
// 	 console.log(e,'dsada')
//  })