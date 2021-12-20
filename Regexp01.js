function myRegExp(str){
    if( /^\d..\d$/.test(str) || /^\d....\d$/.test(str)) {
        return true
    }
    else return false
}

console.log(myRegExp('147744'))