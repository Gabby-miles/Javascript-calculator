var box = document.getElementById('screen');


function addtoScreen(x){
 // to add more than just one number to screen add the '=+' to bax.value
  box.value+= x;
  if(x === "c"){
     box.value = "";
     }
  if(x==="+"){
    function sum(a,b){
      a+b;
    }
  }
}

//to do the actual math  you can use eval();
function total(){
  x= box.value
  x= eval(x);
  box.value= x;
  console.log(total);
  console.log(x);
}

function power(){
  x = box.value;
  x = eval(x * x);
  box.value=x;
}

function backspac(){
  var num = box.value;
  var len = num.length-1;
  var newNum = num.substring(0,len);
  box.value = newNum;
}