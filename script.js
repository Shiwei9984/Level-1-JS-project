function initialization(){
addButtonPenny = document.getElementById("addForPenny");
subtractButtonPenny = document.getElementById("subtractForPenny");
addButtonNickle = document.getElementById("addForNickle");
subtractButtonNickle = document.getElementById("subtractForNickle");
addButtonDime = document.getElementById("addForDime");
subtractButtonDime = document.getElementById("subtractForDime");
addButtonQuarter = document.getElementById("addForQuarter");
subtractButtonQuarter = document.getElementById("subtractForQuarter");
//buttons
pennyNum = document.getElementById("pennyCount");
pennyVal = document.getElementById("pennyVal");
nickleNum = document.getElementById("nickleCount");
nickleVal = document.getElementById("nickleVal");
dimeNum = document.getElementById("dimeCount");
dimeVal = document.getElementById("dimeVal");
quarterNum = document.getElementById("quarterCount");
quarterVal = document.getElementById("quarterVal");
Sum = document.getElementById("total");
coinAudio = document.getElementById("coin");
Penny= 0;
penny = 0.00;
Nickle = 0;
nickle = 0.00;
Dime = 0;
dime = 0.00;
Quarter = 0;
quarter = 0.00;
totalVal = 0.00;
display();
//Number and value of coins
}
function display(){
 pennyNum.innerHTML = Penny;
 pennyVal.innerHTML = "$: "+penny;
 nickleNum.innerHTML = Nickle;
 nickleVal.innerHTML = "$: "+nickle;
 dimeNum.innerHTML = Dime;
 dimeVal.innerHTML = "$: "+dime;
 quarterNum.innerHTML = Quarter;
 quarterVal.innerHTML = "$: "+quarter;
 calculateTotal();
 total.innerHTML = "$: "+totalVal;
 //display the content after an interaction.
}
//functions for the number and value of the coins.
function addPenny(){
 Penny++;
 penny = (Penny*0.01);
 penny = parseFloat(penny).toFixed(2);
 coinAudio.play();
 display();
}
function subtractPenny(){
  if(Penny!=0){
    Penny--;
    penny = (Penny*0.01);
    penny = parseFloat(penny).toFixed(2);
    coinAudio.play();
    display();
  }
}
function addNickle(){
  Nickle++;
  nickle = (Nickle*0.05);
  nickle = parseFloat(nickle).toFixed(2);
  coinAudio.play();
  display();
}
function subtractNickle(){
  if(Nickle!=0){
    Nickle--;
    nickle = (Nickle*0.05);
    nickle = parseFloat(nickle).toFixed(2);
    coinAudio.play();
    display();
  }
}
function addDime(){
  Dime++;
  dime = (Dime*0.1);
  dime = parseFloat(dime).toFixed(2);
  coinAudio.play();
  display();
}
function subtractDime(){
  if(Dime!=0){
    Dime--;
    dime = (Dime*0.1);
    dime = parseFloat(dime).toFixed(2);
    coinAudio.play();
    display();
  }
}
function addQuarter(){
  Quarter++;
  quarter = (Quarter*0.25);
  quarter = parseFloat(quarter).toFixed(2);
  coinAudio.play();
  display();
}
function subtractQuarter(){
  if(Quarter!=0){
    Quarter--;
    quarter = (Quarter*0.25);
    quarter = parseFloat(quarter).toFixed(2);
    coinAudio.play();
    display();
  }
}
function calculateTotal(){
  totalVal = Penny*0.01 + Nickle*0.05 + Dime*0.1 + Quarter*0.25;
  totalVal = parseFloat(totalVal).toFixed(2);
}
