/**
 * Created by SnowWolf7 on 24/06/2018.
 */

//这个函数会返回一个函数数组，其中每个函数都返回10
function closure () {
    var result = new Array();

    for (var i = 0; i < 10; i++) {
        result[i] = function () {
            return i;
        };
    }
    return result;
}

//创建另一个匿名函数强制让闭包的行为符合预期
function closure() {
	var result = new Array();

	for (var i = 0; i < 10; i++) {
		result[i] = function(num) {
			return function() {
				return num;
			}
		}(i);
	}

	return result;
}

//关于this对象
var name = "The window";

var object = {
	name : "nike",

	getNameFunc : function() {
		return function() {
			return this.name;
		};
	}
}

alert(object.getNameFunc()());	//“The window"(非严格模式下)

//内存泄漏
function assignHandler() {
	var element = document.getElementById("someElement");

	element.onclick = function() {
		alert(element.id);
	};
}

// 解决内存泄漏问题
function assignHandler() {
	var element = document.getElementById("someElement");
	var id = element.id;
	element.onclick = function() {
		alert(id);
	};
	element = null;
}