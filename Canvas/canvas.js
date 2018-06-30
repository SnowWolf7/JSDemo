/**
 *
 * Created by SnowWolf7 on 29/05/2018.
 */
var drawing = document.getElementById("drawing");

//确定浏览器支持<canvas>元素
if(drawing.getContext) {
	var context = drawing.getContext("2d");
}
