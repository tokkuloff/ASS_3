function bmi(){
  kg = document.getElementById('kg').value;
  cm = document.getElementById('cm').value;
  let answer = kg /( cm * cm);
  document.getElementById("result").innerHTML = answer;
  if(parseInt(answer) < 18.5){
    document.getElementById("resultText").innerHTML = "You are underweight.";
  }
  else if(parseInt(answer) > 18.5 && parseInt(answer) < 24.9){
    document.getElementById("resultText").innerHTML = "You have a normal weight.";
  }
  else if(parseInt(answer) > 24.9){
    document.getElementById("resultText").innerHTML = "You are overweight.";
  }
}

function randomizer(){
  text = document.getElementById('names').value;
  text = text.split(',')
  ans = text[Math.floor(Math.random() * text.length)];
  document.getElementById("resultText1").innerHTML = ans + " is going to buy lunch today.";
}
