/**
 * Created by SnowWolf7 on 24/06/2018.
 */
//有权访问私有变量和私有函数的的公有方法称为特权方法（privileged method)
//在构造函数中定义特权方法。问题：针对每个实例都会创建同样的一组新方法
function Person (name) {
	this.getName = function() {
		return this.name;
	};

	this.setName = function(value) {
		name = value;
	};
}

//在私有作用域中定义私有变量或函数，同样也可以创建私有方法。静态私有变量，由实例共享的属性。
(function () {
	//私有变量和私有函数
	var privateVariable = 10;
	function privateFunction() {
		return false;
	};

	myObject = function() {};

	myObject.prototype.publicMethod = function() {
		privateVariable ++;
		return privateFunction();
	};
})();

(function() {
	var name = "";

	Person = function(value) {
		name = value;
	};
	Person.prototype.getName = function() {
		return this.name;
	};
	Person.prototype.setName = function(value) {
		name = value;
	};
})();

/*
	模块模式(为单例创建私有变量和方法)
 */

//对象自变量方式创建单例
var singleton = {
	name : value,
	method : function() {

	}
}

//模块模式为单例添加私有变量和特权方法
var singleton = function() {
	var privateVariable = 10;
	function privateFunction() {
		return false;
	};

	return {
		publicProperty : true,
		publicMethod : function() {
			privateVariable++;
			return privateFunction();
		}
	};
}();

//增强的模块模式
function BaseComponent() {	
}
function OtherComponent() {
}
var application = function() {

	//private variable and method
	var components = new Array();
	
	//initializaion
	components.push(new BaseComponent());

	//create a local copy of application
	var app = new BaseComponent();
	
	//public interface
	app.getComponentCount = function() {
		return components.length;
	};

	app.registerComponent = function(component) {
		if(typeof component == "object") {
			components.push(component);
		}
	};

	//return it
	return app;
}();





