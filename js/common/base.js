"use strict";

function init(){
  setTextareaDimensions();
}

function setTextareaDimensions() {
  var offsetHeight = 65;
  var textareaHeight = ((window.innerHeight - offsetHeight));
  var offsetWidth = 40;
  var textareaWidth = window.innerWidth * 0.80  - offsetWidth;
  
  var $textareaCode = $("#textareaCode");
  
  $textareaCode.height(textareaHeight);
  $textareaCode.width(textareaWidth);
}