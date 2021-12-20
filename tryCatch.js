

function reverseString(s) {
    try { 
      if (typeof s !== "string") { 
        throw new SyntaxError('give me a string') 
      }
      else {
        s = s.split("").reverse().join("");
  console.log(s);
  }
    }
  catch (err){
    console.log( `You have a ${err.name}, ${err.message}`)
  }
  }
  reverseString(5455)