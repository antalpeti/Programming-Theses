"use strict";

function init(){
  setTextareaDimensions();
}

function setTextareaDimensions() {
  var offsetHeight = 60;
  var textareaHeight = ((window.innerHeight - offsetHeight));
  var offsetWidth = 50;
  var textareaWidth = window.innerWidth * 0.80  - offsetWidth;
  
  var $textareaCode = $("#textareaCode");
  
  $textareaCode.height(textareaHeight);
  $textareaCode.width(textareaWidth);
}