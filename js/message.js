var APP_ID = '7oiJCWgnJ763g8Ik18kdmGAu-gzGzoHsz';
var APP_KEY = 'TeD8RnyJqpSrQqdGT8CbxeBe';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.set('words', 'Hello world!');
testObject.save().then(function (testObject) {
  console.log('保存成功。')
})