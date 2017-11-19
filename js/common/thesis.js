"use strict";

var summation = "var numbers = [1,2,3,4,5,6,7,8,9,10];"+
                "\n"+
                "\nvar sum = 0;"+
                "\n"+
                "\nfor(var i = 0, il = numbers.length; i < il; i++){"+
                "\n  sum += numbers[i];"+
                "\n}"+
                "\n"+
                "\nalert(sum);";
                
var counting  = "var numbers = [1,9,3,7,5,6,4,8,2,10];"+
                "\n"+
                "\nvar counter = 0;"+
                "\nvar limit = 5;"+
                "\n"+
                "\nfor(var i = 0, il = numbers.length; i < il; i++){"+
                "\n  if(numbers[i] > limit){"+
                "\n    counter++;"+
                "\n  }"+
                "\n}"+
                "\n"+
                "\nalert(counter);";
                
var decision  = "var numbers = [1,2,3,7,51,6,4,11,2,10];"+
                "\n"+
                "\nvar target = 11;"+
                "\n"+
                "\nvar i = 0;"+
                "\n"+
                "\nvar numbersLength = numbers.length"+
                "\nwhile(i  < numbersLength && numbers[i] !== target){"+
                "\n  i++;"+
                "\n}"+
                "\n"+
                "\nif(i < numbersLength){"+
                "\n  alert('Target found!');"+
                "\n} else {"+
                "\n  alert('Target not found!');"+
                "\n}"+
                "\n"+
                "\nalert(counter);";
                
var selection = "var numbers = [1,2,3,7,51,6,4,11,2,10];"+
                "\n"+
                "\nvar target = 7;"+
                "\n"+
                "\nvar i = 0;"+
                "\n"+
                "\nvar numbersLength = numbers.length"+
                "\nwhile(i  < numbersLength && numbers[i] !== target){"+
                "\n  i++;"+
                "\n}"+
                "\n"+
                "\nvar lineNumber = (i < numbersLength) ? i + 1 : -1;"+
                "\nalert(lineNumber);";
                
var search    = "var numbers = [1,2,3,7,51,61,17,11,2,22];"+
                "\n"+
                "\nvar target = 17;"+
                "\n"+
                "\nvar i = 0;"+
                "\n"+
                "\nvar numbersLength = numbers.length"+
                "\nwhile(i  < numbersLength && numbers[i] !== target){"+
                "\n  i++;"+
                "\n}"+
                "\n"+
                "\nif(i < numbersLength){"+
                "\n  alert('Target found! At line number: ' + (i + 1));"+
                "\n} else {"+
                "\n  alert('Target not found!');"+
                "\n}";
                
var assortment  = "var numbers = [1,2,3,7,51,61,17,11,2,22];"+
                  "\nvar assortedNumbers = [];"+
                  "\nvar target = 11;"+
                  "\n"+
                  "\nvar j = 0;"+
                  "\nfor(var i = 0, il = numbers.length; i < il; i++){"+
                  "\n  if(numbers[i] > target){"+
                  "\n    assortedNumbers[j++] = numbers[i];"+
                  "\n  }"+
                  "\n}"+
                  "\n"+
                  "\nalert('Original numbers: ' + numbers);"+
                  "\nalert('Assorted numbers: ' + assortedNumbers);";
                
var separable  =  "var numbers = [1,2,3,7,51,61,17,11,2,22];"+
                  "\nvar limit = 11;"+
                  "\n"+
                  "\nvar numbersAboveTarget = [];"+
                  "\nvar numbersBelowTarget = [];"+
                  "\n"+
                  "\nvar j = 0;"+
                  "\nvar k = 0;"+
                  "\n"+
                  "\nfor(var i = 0, il = numbers.length; i < il; i++){"+
                  "\n  if(numbers[i] > limit){"+
                  "\n    numbersAboveTarget[j++] = numbers[i];"+
                  "\n  } else {"+
                  "\n    numbersBelowTarget[k++] = numbers[i];"+
                  "\n  }"+
                  "\n}"+
                  "\n"+
                  "\nalert('Original numbers: ' + numbers + " +
                  "\n      '\\nNumbers above limit: ' + numbersAboveTarget + "+
                  "\n      '\\nNumbers below or equal limit: ' + numbersBelowTarget);";

function loadThesis(thesisId){
  switch(thesisId){
    case 'summation' : loadThesisName('Summation'); loadThesisCode(summation); break;
    case 'counting' : loadThesisName('Counting'); loadThesisCode(counting); break;
    case 'decision' : loadThesisName('Decision'); loadThesisCode(decision); break;
    case 'selection' : loadThesisName('Selection'); loadThesisCode(selection); break;
    case 'search' : loadThesisName('Search'); loadThesisCode(search); break;
    case 'assortment' : loadThesisName('Assortment'); loadThesisCode(assortment); break;
    case 'separable' : loadThesisName('Separable'); loadThesisCode(separable); break;
  }
}

function loadThesisName(thesisName){
  $("#divThesis").html(thesisName + ':');
}

function loadThesisCode(code){
  $("#textareaCode").val(code); 
}

function runThesis(){
  var thesisCode = $("#textareaCode").val();
  eval(thesisCode);
}