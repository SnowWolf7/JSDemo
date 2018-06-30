/**
 * Created by SnowWolf7 on 19/06/2018.
 */

// person：对象字面量语法
var person = {
	name : "JR",
	age : 25,
	job : "Software Engineer",

	sayName : function () {
		alert(this.name);
	}
}

//修改属性默认特性：Object.defineProperty()
var person = {};
Object.defineProperty(person, "name", {
	writable : false,
	configurable : false,
	value : "JR"
});

//访问器属性
var book = {
	_year : 2004,
	edition : 1
}
Object.defineProperty(book, _year, {
	get : function(){
		return this._year;
	},
	set : function(newValue) {
		if(newValue > 2004)	{
			this._year = newValue;
			this.edition += newValue - 2004;
		}
	}
});

//定义多个属性
var book = {};
Object.defineProperties(book, {
	_year : {
		writable : true,
		value : 2004
	},

	edition : {
		writable : true,
		value : 1
	},

	year : {
		get : function() {
			return this._year;
		},
		set : function(newValue) {
			if (newValue > 2004) {
				this._year = newValue;
				this.edition += newValue - 2004;
			}
		}
	}

});

//读取属性的特性 Object.getOwnPropertyDescriptor()
var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
alert(descriptor.value);
alert(descriptor.writable);


