//箭头函数: 对回调函数的简化写法
//	目的: 打开回调函数的作用域，让回调函数和外层函数共用同一个作用
var evens=[2,4,6,8,10];
var odds=evens.map(val=>val+1);
console.log(odds);
evens.sort((a,b)=>b-a);
console.log(evens);

var bob={
	_name:"Bob",
  _friends:[
    "Amy","Cinne","Lucy","Rose","Jack"  
  ],
  getFriends:function(){
    this._friends.forEach(val=>{
      console.log(this._name+" 认识 "+val);
    });
  }
}
bob.getFriends();