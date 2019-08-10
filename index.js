function takeANumber(katzDeli, name){
  let i = 0
  katzDeli.push(`${name}`); {
    return(`Welcome, ${name}. You are number ${i+1} line.`)
  }
}

function nowServing(katzDeli) {
  let a = 0;
  while (a < katzDeli.length) {
    a++;
  }
  if (katzDeli.length === 0) {
  return "There is nobody waiting to be served!" 
  }
    else
    return (`Currently serving ${katzDeli.shift(a)}.`)
  }
  
  function currentLine(katzDeli) {
    var line = []
  for (let b = 0; b < katzDeli.length; b++) {
    line.push(` `+[b+1]+`. `  + katzDeli[b])
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}