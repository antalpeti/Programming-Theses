"use strict";

var summation = "var numbers = [1,2,3,4,5,6,7,8,9,10];"+
                "\n"+
                "\nvar sum = 0;"+
                "\n"+
                "\nfor(var i = 0, il = numbers.length; i < il; i++){"+
                "\n  sum += numbers[i];"+
                "\n}"+
                "\n"+
                "\nalert('Sum of the numbers: ' + sum);";
                
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
                "\nalert('Numbers above the limit: ' + counter);";
                
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
                "\n}";
                
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
                "\nalert('Target found at line number: ' + lineNumber);";
                
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
                  "\nvar limit = 11;"+
                  "\n"+
                  "\nvar j = 0;"+
                  "\nfor(var i = 0, il = numbers.length; i < il; i++){"+
                  "\n  if(numbers[i] > limit){"+
                  "\n    assortedNumbers[j++] = numbers[i];"+
                  "\n  }"+
                  "\n}"+
                  "\n"+
                  "\nalert('Original numbers: ' + numbers +"+
                  "\n      '\\nAssorted numbers: ' + assortedNumbers);";
                
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
                  
var minimum     = "var numbers = [33,2,3,7,51,61,17,11,2,22];"+
                  "\n"+
                  "\nvar minimum = numbers[0];"+
                  "\n"+
                  "\nfor(var i = 0, il = numbers.length; i < il; i++){"+
                  "\n  if(numbers[i] < minimum){"+
                  "\n    minimum = numbers[i];"+
                  "\n  }"+
                  "\n}"+
                  "\n"+
                  "\nalert('Minimum: ' + minimum);";
                  
var maximum     = "var numbers = [33,2,3,7,51,61,17,11,2,22];"+
                  "\n"+
                  "\nvar maximum = numbers[0];"+
                  "\n"+
                  "\nfor(var i = 0, il = numbers.length; i < il; i++){"+
                  "\n  if(numbers[i] > maximum){"+
                  "\n    maximum = numbers[i];"+
                  "\n  }"+
                  "\n}"+
                  "\n"+
                  "\nalert('Maximum: ' + maximum);";
                  
var engraving   = "var numbers =  [33,5,3,7,51,16,17,63,2,22];"+
                  "\nvar numbers2 = [1,12,5,8,13,63,18,11,9,17];"+
                  "\nvar length2 = numbers2.length;"+
                  "\nvar engraving = [];"+
                  "\n"+
                  "\nvar j;"+
                  "\nvar k = 0;"+
                  "\n"+
                  "\nfor(var i = 0, il = numbers.length; i < il; i++){"+
                  "\n  j = 0;"+
                  "\n  while(j < length2 && numbers2[j] != numbers[i]){"+
                  "\n    j++;"+
                  "\n  }"+
                  "\n  if(j < length2){"+
                  "\n    engraving[k++] = numbers[i];"+
                  "\n  }"+
                  "\n}"+
                  "\n"+
                  "\nalert('Numbers: ' + numbers + "+
                  "\n      '\\nNumbers2: ' + numbers2 + "+
                  "\n      '\\nEngraving: ' + engraving)";
                  
var union       = "var numbers =  [33,5,3,7,51,16,17,63,2,22];"+
                  "\nvar numbers2 = [1,12,5,8,13,63,18,11,9,17];"+
                  "\nvar length = numbers.length;"+
                  "\nvar length2 = numbers2.length;"+
                  "\nvar union = [];"+
                  "\n"+
                  "\nfor(var i = 0; i < length; i++){"+
                  "\n  union[i] = numbers[i];"+
                  "\n}"+
                  "\n"+
                  "\nvar k = length;"+
                  "\nfor(var j = 0; j < length2; j++){"+
                  "\n  var i = 0;"+
                  "\n  while(i < length && numbers[i] != numbers2[j]){"+
                  "\n    i++;"+
                  "\n  }"+
                  "\n  if(i >= length){"+
                  "\n    union[k++] = numbers2[j];"+
                  "\n  }"+
                  "\n}"+
                  "\n"+
                  "\nalert('Numbers: ' + numbers + "+
                  "\n      '\\nNumbers2: ' + numbers2 + "+
                  "\n      '\\nUnion: ' + union)";

function loadThesis(thesisId){
  switch(thesisId){
    case 'summation' : loadThesisName('Summation'); loadThesisCode(summation); break;
    case 'counting' : loadThesisName('Counting'); loadThesisCode(counting); break;
    case 'decision' : loadThesisName('Decision'); loadThesisCode(decision); break;
    case 'selection' : loadThesisName('Selection'); loadThesisCode(selection); break;
    case 'search' : loadThesisName('Search'); loadThesisCode(search); break;
    case 'assortment' : loadThesisName('Assortment'); loadThesisCode(assortment); break;
    case 'separable' : loadThesisName('Separable'); loadThesisCode(separable); break;
    case 'minimum' : loadThesisName('Minimum'); loadThesisCode(minimum); break;
    case 'maximum' : loadThesisName('Maximum'); loadThesisCode(maximum); break;
    case 'engraving' : loadThesisName('Engraving'); loadThesisCode(engraving); break;
    case 'union' : loadThesisName('Union'); loadThesisCode(union); break;
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