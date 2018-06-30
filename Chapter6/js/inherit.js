/**
 * Created by SnowWolf7 on 22/06/2018.
 */
 //原型链
function SuperType() {
 	this.property = true;
}

SuperType.prototype.getSuperValue = function() {
	return this.property;
};

function SubType () {
	this.subProperty = false;
}

//继承了SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
	return this.subProperty;
};

var instance = new SubType();
alert(instance.getSuperValue());

//确定原型和实例的关系
alert(instance instanceof Object);
alert(instance instanceof SuperType);
alert(instance instanceof SubType);

alert(Object.prototype.isPrototypeOf(instance));
alert(SuperType.prototype.isPrototypeOf(instance));
alert(SubType.prototype.isPrototypeOf(instance));

//借用构造函数
//问题：方法还是定义在构造函数中，函数复用还是无从谈起
function SuperType() {
	this.colors = ["green", "red", "blue"];
}

function SubType() {
	//继承SuperType
	SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push("black");
alert(instace1.colors);

var instance2 = new SubType();
alert(instance2.colors);

//组合继承(最常用的继承模式)
function SuperType(name) {
	this.name = name;
	this.colors = ['red', 'green', 'blue'];
}
SuperType.prototype.sayName = function() {
	alert(this.name);
};

function SubType(name, age) {
	//继承属性
	SuperType.call(this, name);
	this.age = age;
}
//继承方法
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
	alert(this.name);
};

//原型式继承
//问题：需要两次调用超类型的构造函数。一次在创建子类型原型的时候，另一次是在子类型构造函数内部
function object(o) {
	function F() {}
	F.prototype = o;
	return new F();
}
var person = {
	name: "Nike",
	friends: ['kappa', '360']	
};
var anotherPerson = object(person);
//ECMAScript新增Object.create()方法规范了原型式继承。
var anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push('Rob');

var anotherPerson = Object.create(person, {
	name : {
		value : "ad"
	}
});


//寄生式继承
function createAnother(original) {
	var another = object(original);	//通过调用函数创建新对象
	another.sayHi = function() {	//以某种方式增强对象
		alert('hi');
	}
	return another;
}

var anotherPerson = createAnother(person);

//寄生组合式继承
function inheritPrototype(SubType, SuperType) {
	var prototype = object(SuperType.prototype);
	prototype.constructor = SubType;
	SubType.prototype = prototype;
}
function SuperType(name) {
	this.name = name;
	this.colors = ['red', 'green', 'blue'];
}

SuperType.prototype.sayName = function() {
	alert(this.name);
};

function SubType(name, age) {
	SuperType.call(this, name);
	this.age = age;
}

inheritPrototype(SubType,SuperType);
SubType.prototype.sayAge = function(){
	alert(this.age);
};






 
