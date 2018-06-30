/**
 * Created by SnowWolf7 on 24/06/2018.
 */

// function factorial(num) {
// 	if(num <= 1) {
// 		return 1;
// 	}
// 	else {
// 		return num * factorial(num-1);
// 	}
// }

//arguments.callee指向正在执行的函数指针(严格模式下，不能通过脚本访问arguments.callee)
// function factorial(num) {
// 	if(num <= 1) {
// 		return 1;
// 	}
// 	else {
// 		return num * arguments.callee(num-1);
// 	}
// }

//使用命名函数表达式(严格模式／非严格模式都可以)
var factorial = function f(num) {
	if(num <= 1) {
		return 1;
	}
	else {
		return num * f(num-1);
	}
}

console.log(factorial(7));
