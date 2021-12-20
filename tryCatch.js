

function reverseString(s) {
    try { 
      typeof s !== "string"? throw new MyError('give me a string') : (s = s.split("").reverse().join(""));
  console.log(s);
    }
  catch (err){
    console.log(err.name, err.message)
  }
  }
  reverseString(5415)