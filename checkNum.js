
function isPostive(num) {
  try {
    if (num>0) {
      console.log("Yes");
 }
    if (num === 0) {
       throw new Error("Zero error");
   }
   if (num < 0) {
       throw new Error("Negative error");
   }
   if (isNaN(num)) {
       throw new Error("Please insert a positive number");
   }
} 
catch (err) {
   console.log(err.name, err.message)
 }
  return num;
  }
isPostive(0)
