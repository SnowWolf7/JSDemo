/**
 * Created by SnowWolf7 on 19/06/2018.
 */
/*
    问题：虽然Object构造函数和对象字面量都可以用来创建单个对象，但这些方法有一个明显的缺点：使用同一个接口创建很多对象，会产生大量重复的代码。
    解决：工厂模式
 */
function createPerson(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		alert(o.name);
	};
	return o;
}

var person1 = createPerson("JR", 23, "Software Engineer");

/*
	问题：工厂方法没有解决对象识别问题（即如何知道一个对象的类型）
	解决：构造函数模式
 */
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function() {
		alert(this.name);
	};
}

var person2 = new person("JR", 25, "Master");

/*
	问题：构造函数也有缺点，每个方法都要在每个实例上重新创建一遍。
	解决：原型模式
 */
function Person() {
}

Person.prototype.name = "Joh";
Person.prototype.age = 24;
Person.prototype.job = "Doctor";
Person.prototype.sayName = function() {
	alert(this.name);
};

var person3 = new Person();