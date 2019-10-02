// var a:string = 'hi'
// console.log('sam')
// 了解一下npx parcel
// npx http-server . -c-1
// npx 这个命令是在干嘛

var div = document.createElement("div");
div.style.border = "1px solid red";
div.style.height = "100px";
div.style.width = "100px";
div.id = "demo";

document.body.appendChild(div);

var x = false;
var position = [0, 0];

div.onmousedown = e => {
  x = true;
  position = [e.clientX, e.clientY];
};

document.onmousemove = e => {
  if (x === true) {
    var deltaX = e.clientX - position[0];
    var deltaY = e.clientY - position[1];
    var top = parseInt(div.style.top!) || 0;
    var left = parseInt(div.style.left!) || 0;
    div.style.top = top + deltaY + "px";
    div.style.left = left + deltaX + "px";
    position = [e.clientX, e.clientY];
  }
};

document.onmouseup = e => {
  x = false;
};
