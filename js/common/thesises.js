"use strict";

var summation = "var numbers = [1,2,3,4,5,6,7,8,9,10];"+
                "\n"+
                "\nvar summation = 0;"+
                "\n"+
                "\nfor(var i = 0, il = numbers.length; i < il; i++){"+
                "\n  summation += numbers[i];"+
                "\n}"+
                "\n"+
                "\nalert(summation);";
          
function loadThesis(code){
  switch(code){
    case 'summation' : $("#textareaCode").val(summation); break;
  }
}

function runThesis(){
  var thesisCode = $("#textareaCode").val();
  eval(thesisCode);
}