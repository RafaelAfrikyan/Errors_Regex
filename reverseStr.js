let str = "cdcdvc";

function reveseStr (s) {
  let returned;
  try { returned = s.split('').reverse().join('')
  }
  catch (err) {
    console.log(`Դուք մուտքագրել եք ${typeof s}, իսկ պետք է մուտթագրեիք ${typeof ''}`)
    console.log(`Your input - ${s}`)
  }
  console.log(returned)
  return returned;
}
reveseStr(5151)
