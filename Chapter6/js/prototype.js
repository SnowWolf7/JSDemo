/**
 * Created by SnowWolf7 on 20/06/2018.
 */
function Person() {
}

Person.prototype.name = "JR";
Person.prototype.age = 23;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName =  function () {
    console.log(this.name);
};

//每创建一个函数，就会同时创建它的prototype对象，这个对象自动获得constructor属性。
var person1 = new Person();
var person2 = new Person();

//person1和person2访问的事同一组属性和同一个sayName()函数
console.log(person1.sayName == person2.sayName);

//isPrototypeOf确定对象之间是否存在prototype关系
console.log(Person.prototype.isPrototypeOf(person1));

//Object.getPrototypeOf(),返回[[Prototype]]的值
console.log(Object.getPrototypeOf(person2) == Person.prototype);

//hasOwnProperty()检测一个属性是否存在于实例中
console.log(person1.name);
alert(person1.hasOwnProperty(name));
person1.name = "Joh";
console.log(person1.name);
alert(person1.hasOwnProperty(name));
delete person1.name;
console.log(person1.name);

//in操作符会在通过对象能够访问给定属性时返回true
alert(name in person1);
function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object);
}

//for-in返回所有能够通过对象访问的、可枚举的属性。
for(var prop in person1) {
	if(prop == "name") {
		alert("found name");
	}
}

//Object.keys():取得对象上所有可枚举的实例属性。
var keys1 = Object.keys(Person.prototype);
console.log(keys1);

//Object.getOwnPropertyNames()返回所有实例属性
var keys2 = Object.getOwnPropertyNames(Person.prototype);
console.log(keys2);

//更简单的原型模型
Person.prototype = {
	constructor: Person,	//constructor原指向Object构造函数。这种方式会导致constructor属性的[[Enumerable]]特性设置为true。
	name: "John",
	age: 26,
	job: "Love",
	friends: ["Shelby", "Court"],
	sayName : function() {
		return this.name;
	}
}

//解决constructor的Enumerable为true问题。如果使用兼容ECMAScript5的JavaScript引擎。
Person.prototype = {
	name: "John",
	age: 26,
	job: "Love",
	sayName : function() {
		return this.name;
	}
}
Object.defineProperty(Person.prototype, constructor, {
	enunerbale: false,
	value: Person
});

//原型对象的问题是由其共享的本质所导致的
var person3 = new Person();
var person4 = new Person();
person3.friends.push("Van");

console.log(person3);	//"Shelby, Court, Van"
console.log(person4);	//"Shelby, Court, Van"

//构造函数模式和原型模式组合使用来创建自定义类型（最广泛使用的方法）构造函数模式用于定义实力属性，原型模式用于定义方法和共享属性
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job =  job;
	this.friends = ["Shelby", "Court"];
}

Person.prototype = {
	constructor: Person,
	sayName: function() {
		alert(this.name);
	}
}

//动态原型模式
function Person(name, age, job) {
	//属性
	this.name = name;
	this.age = age;
	this.job =  job;
	this.friends = ["Shelby", "Court"];
	//方法
	if(typeof this.sayName !== "function") {
		Person.prototype.sayName = function() {
			alert(this.name);
		}
	}
}

//寄生构造函数模式
function Person(name, age, job) {
	var o = new Object();

	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		alert(this.name);
	};

	return o;
}
var friend = new Person("Nike", 24, "Doctor");

//稳妥构造函数
function Person(name, age, job) {
	var o = new Object();

	//可以在这里定义私有变量和方法
	
	o.sayName = function() {
		alert(this.name);
	};

	return o;
}







