"use strict";

function init(){
  setTextareaDimensions();
}

function setTextareaDimensions() {
  var offsetHeight = 100;
  var textareaHeight = ((window.innerHeight - offsetHeight));
  var offsetWidth = 38;
  
  var textareaWidth = window.innerWidth * 0.80  - offsetWidth;
  
  var $textareaCode = $("#textareaCode");
  
  $textareaCode.height(textareaHeight);
  $textareaCode.width(textareaWidth);
}

function filterList() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("inputFilter");
  filter = input.value.toUpperCase();
  ul = document.getElementById("ulThesis");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}