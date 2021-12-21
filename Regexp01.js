function myRegExp(str){
    if( /^(\d{4}|\d{6})$/.test(str)) {
        return true
    }
    else return false
}

console.log(myRegExp('1474'))





 
