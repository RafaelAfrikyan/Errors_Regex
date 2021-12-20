
function isPostive(num) {
  try {
    if (num === 0) {
      throw new SyntaxError('Zero error')
    }
    if (num < 0) {
      throw new MyError('Negative error')
    }
    if(isNaN(num)){
      throw new MySecondError('Թիվ գրի արա')
    }
        console.log('Yes')
  }
    catch (err){
      if(err.name === 'SyntaxError') {
        console.log(err.message)
      } 
      if(err.name === 'MyError') {
        console.log(err.message)
      }
      if (err.name === 'MySecondError') {
        console.log(err.message)
      }
    }
  return num;
  }
isPostive(5)