function ucFirst(str) {
  if (str === null) {
   return true; 
   
} else if (str === ""){
  return (str);
  }

  else if (str.length>=0){
    str = str[0].toUpperCase()+str.slice(1);
    return (str);
  } 
}
