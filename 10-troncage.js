//troncage du début et fin

function removeChar(str){
    if (str.length <=2 ) {return "";
     } else {
       return str.slice(1,-1)
    }};