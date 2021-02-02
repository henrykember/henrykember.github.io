
'use strict'


$(document).ready(function() {

var canvas = new fabric.Canvas('c');
var imgElement = document.getElementById('my-image');
var imgInstance = new fabric.Image(imgElement, {
  left: 500,
  top: 100,
  angle: 30,
  opacity: 0.85
});
canvas.add(imgInstance);

});



