/**
 * Created by SnowWolf7 on 11/06/2018.
 * 功能：将Object转换成Array
 */

var myObj = {
    1 : {key:"高血压", value: 8},
    2 : {key:"糖尿病", value: 5}
};
//第一种方法
var arr = [];
$.each(myObj,function (i, n) {
    arr.push(n);
});

console.log(arr);
//第二种方法
var array = $.map(myObj,function (value, index) {
    return [value];
})
console.log(array);