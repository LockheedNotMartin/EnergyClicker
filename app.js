// Set starting values
let energyPerTick = 0;
let money = 0;
let moneyPerHour = parseInt(localStorage.getItem('money')) || 0;;
let points = parseInt(localStorage.getItem('points')) || 0;
let lifetimePoints = parseInt(localStorage.getItem('lifetimePoints')) || 0;
let clickValue = parseInt(localStorage.getItem('clickValue')) || 1;
let upgradeCosts = {upgrade1: 10, upgrade2: 500, upgrade3: 50000, upgrade4: 7500000, upgrade5: 1500000000, upgrade6: 375000000000, upgrade7: 112500000000000, upgrade8: 3.9375e16
};
let upgradeCounts = {upgrade1: 0, upgrade2: 0, upgrade3: 0, upgrade4: 0, upgrade5: 0, upgrade6: 0, upgrade7: 0, upgrade8: 0
};

// Get DOM elements
const pointsDisplay = document.getElementById('points');
const secondDisplay = document.getElementById('second');
const clickerButton = document.getElementById('clicker');
const upgrade1Button = document.getElementById('upgrade1');
const upgrade2Button = document.getElementById('upgrade2');
const upgrade3Button = document.getElementById('upgrade3');
const upgrade4Button = document.getElementById('upgrade4');
const upgrade5Button = document.getElementById('upgrade5');
const upgrade6Button = document.getElementById('upgrade6');
const upgrade7Button = document.getElementById('upgrade7');
const upgrade8Button = document.getElementById('upgrade8');

function loadData(){
  upgradeCosts.upgrade1 = parseInt(localStorage.getItem('upgrade1Cost')) || 10;
  upgradeCosts.upgrade2 = parseInt(localStorage.getItem('upgrade2Cost')) || 500;
  upgradeCosts.upgrade3 = parseInt(localStorage.getItem('upgrade3Cost')) || 50000;
  upgradeCosts.upgrade4 = parseInt(localStorage.getItem('upgrade4Cost')) || 7500000;
  upgradeCosts.upgrade5 = parseInt(localStorage.getItem('upgrade5Cost')) || 1500000000;
  upgradeCosts.upgrade6 = parseInt(localStorage.getItem('upgrade6Cost')) || 375000000000;
  upgradeCosts.upgrade7 = parseInt(localStorage.getItem('upgrade7Cost')) || 112500000000000;
  upgradeCosts.upgrade8 = parseInt(localStorage.getItem('upgrade8Cost')) || 9375e16;
  upgradeCounts.upgrade1 = parseInt(localStorage.getItem('upgrade1Count')) || 0;
  upgradeCounts.upgrade2 = parseInt(localStorage.getItem('upgrade2Count')) || 0;
  upgradeCounts.upgrade3 = parseInt(localStorage.getItem('upgrade3Count')) || 0;
  upgradeCounts.upgrade4 = parseInt(localStorage.getItem('upgrade4Count')) || 0;
  upgradeCounts.upgrade5 = parseInt(localStorage.getItem('upgrade5Count')) || 0;
  upgradeCounts.upgrade6 = parseInt(localStorage.getItem('upgrade6Count')) || 0;
  upgradeCounts.upgrade7 = parseInt(localStorage.getItem('upgrade7Count')) || 0;
  upgradeCounts.upgrade8 = parseInt(localStorage.getItem('upgrade8Count')) || 0;
  updatePointsDisplay();
  updatePrice("upgrade1")
  updateNumber("upgrade1")
  updatePrice("upgrade2")
  updateNumber("upgrade2")
  updatePrice("upgrade3")
  updateNumber("upgrade3")
  updatePrice("upgrade4")
  updateNumber("upgrade4")
  updatePrice("upgrade5")
  updateNumber("upgrade5")
  updatePrice("upgrade6")
  updateNumber("upgrade6")
  updatePrice("upgrade7")
  updateNumber("upgrade7")
  updatePrice("upgrade8")
  updateNumber("upgrade8")
}
loadData()

const startGame = () => {      
    ;[...document.querySelectorAll('button.upgrade-button')].forEach(button => {
        
    })
}

// Add event listeners
clickerButton.addEventListener('click', () => {
  points += clickValue;
  lifetimePoints += clickValue;
  updatePointsDisplay();
});

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function energyProduction(){
  energyPerTick = 0
  energyPerTick += upgradeCounts.upgrade1 * 1/20
  energyPerTick += upgradeCounts.upgrade2 * 2/20
  energyPerTick += upgradeCounts.upgrade3 * 5/20
  energyPerTick += upgradeCounts.upgrade4 * 10/20
  energyPerTick += upgradeCounts.upgrade5 * 20/20
  energyPerTick += upgradeCounts.upgrade6 * 500/20
  energyPerTick += upgradeCounts.upgrade7 * 1000/20
  energyPerTick += upgradeCounts.upgrade8 * 10000/20
}

upgrade1Button.addEventListener('click', () => {
  if (points >= upgradeCosts.upgrade1) {
    points -= upgradeCosts.upgrade1;
    upgradeCounts.upgrade1++;
    upgradeCosts.upgrade1 *= 2;
    updatePointsDisplay();
    updatePrice("upgrade1")
    updateNumber("upgrade1")
  }
});

upgrade2Button.addEventListener('click', () => {
  if (points >= upgradeCosts.upgrade2) {
    points -= upgradeCosts.upgrade2;
    upgradeCounts.upgrade2++;
    upgradeCosts.upgrade2 *= 2;
    updatePointsDisplay();
    updatePrice("upgrade2")
    updateNumber("upgrade2")
  }
});

upgrade3Button.addEventListener('click', () => {
  if (points >= upgradeCosts.upgrade3) {
    points -= upgradeCosts.upgrade3;
    upgradeCounts.upgrade3++;
    clickValue += 10;
    upgradeCosts.upgrade3 *= 2;
    updatePointsDisplay();
    updatePrice("upgrade3")
    updateNumber("upgrade3")
  }
});

upgrade4Button.addEventListener('click', () => {
  if (points >= upgradeCosts.upgrade4) {
    points -= upgradeCosts.upgrade4;
    upgradeCounts.upgrade4++;
    upgradeCosts.upgrade4 *= 2;
    updatePointsDisplay();
    updatePrice("upgrade4")
    updateNumber("upgrade4")
  }
});

upgrade5Button.addEventListener('click', () => {
  if (points >= upgradeCosts.upgrade5) {
    points -= upgradeCosts.upgrade5;
    upgradeCounts.upgrade5++;
    clickValue += 20;
    upgradeCosts.upgrade5 *= 2;
    updatePointsDisplay();
    updatePrice("upgrade5")
    updateNumber("upgrade5")
  }
});

upgrade6Button.addEventListener('click', () => {
  if (points >= upgradeCosts.upgrade6) {
    points -= upgradeCosts.upgrade6;
    upgradeCounts.upgrade6++;
    upgradeCosts.upgrade6 *= 2;
    updatePointsDisplay();
    updatePrice("upgrade6")
    updateNumber("upgrade6")
  }
});

upgrade7Button.addEventListener('click', () => {
  if (points >= upgradeCosts.upgrade7) {
    points -= upgradeCosts.upgrade7;
    upgradeCounts.upgrade7++;
    upgradeCosts.upgrade7 *= 2;
    updatePointsDisplay();
    updatePrice("upgrade7")
    updateNumber("upgrade7")
  }
});

upgrade8Button.addEventListener('click', () => {
  if (points >= upgradeCosts.upgrade8) {
    points -= upgradeCosts.upgrade8;
    upgradeCounts.upgrade8++;
    upgradeCosts.upgrade8 *= 2;
    updatePointsDisplay();
    updatePrice("upgrade8")
    updateNumber("upgrade8")
  }
});

function updatePointsDisplay(){
  pointsDisplay.innerHTML=Math.floor(points)
  secondDisplay.innerHTML=Math.floor(energyPerTick*20)
}

function updatePrice(thing){
  energyProduction()
  switch(thing){
    case "upgrade1":
      //the code
      document.getElementById('u1').innerHTML=upgradeCosts.upgrade1
      break;
    case "upgrade2":
      //the code
      document.getElementById('u2').innerHTML=upgradeCosts.upgrade2
      break;
    case "upgrade3":
      //the code
      document.getElementById('u3').innerHTML=upgradeCosts.upgrade3
      break;
    case "upgrade4":
      //the code
      document.getElementById('u4').innerHTML=upgradeCosts.upgrade4
      break;
    case "upgrade5":
      //the code
      document.getElementById('u5').innerHTML=upgradeCosts.upgrade5
      break;
    case "upgrade6":
      //the code
      document.getElementById('u6').innerHTML=upgradeCosts.upgrade6
      break;
    case "upgrade7":
      //the code
      document.getElementById('u7').innerHTML=upgradeCosts.upgrade7
      break;
    case "upgrade8":
      //the code
      document.getElementById('u8').innerHTML=upgradeCosts.upgrade8
      break;
    default:
      console.log("You're hacking lol.");
  }
}
function updateNumber(thing){
  switch(thing){
    case "upgrade1":
      //the code
      document.getElementById('u1n').innerHTML=upgradeCounts.upgrade1
      break;
    case "upgrade2":
      //the code
      document.getElementById('u2n').innerHTML=upgradeCounts.upgrade2
      break;
    case "upgrade3":
      //the code
      document.getElementById('u3n').innerHTML=upgradeCounts.upgrade3
      break;
    case "upgrade4":
      //the code
      document.getElementById('u4n').innerHTML=upgradeCounts.upgrade4
      break;
    case "upgrade5":
      //the code
      document.getElementById('u5n').innerHTML=upgradeCounts.upgrade5
      break;
    case "upgrade6":
      //the code
      document.getElementById('u6n').innerHTML=upgradeCounts.upgrade6
      break;
    case "upgrade7":
      //the code
      document.getElementById('u7n').innerHTML=upgradeCounts.upgrade7
      break;
    case "upgrade8":
      //the code
      document.getElementById('u8n').innerHTML=upgradeCounts.upgrade8
      break;
    default:
      console.log("You're hacking lol.");
  }
}

function detectUnlock(){
  if(lifetimePoints > 500){
    upgrade2Button.hidden = false
  }
  if(lifetimePoints > 50000){
    upgrade3Button.hidden = false
  }
  if(lifetimePoints > 7500000){
    upgrade4Button.hidden = false
  }
  if(lifetimePoints > 1500000000){
    upgrade5Button.hidden = false
  }
  if(lifetimePoints > 375000000000){
    upgrade6Button.hidden = false
  }
  if(lifetimePoints > 112500000000000){
    upgrade7Button.hidden = false
  }
  if(lifetimePoints > 3.9375e16){
    upgrade8Button.hidden = false
  }
}

setInterval(() => {
  points += energyPerTick;
  lifetimePoints += energyPerTick;
  updatePointsDisplay();
}, 50);

setInterval(() => {
  detectUnlock()
}, 500);

setInterval(() => {
  localStorage.setItem('points', points);
  localStorage.setItem('clickValue', clickValue);
  localStorage.setItem('lifetimePoints', lifetimePoints);
  localStorage.setItem('upgrade1Count', upgradeCounts.upgrade1);
  localStorage.setItem('upgrade1Cost', upgradeCosts.upgrade1);
  localStorage.setItem('upgrade2Count', upgradeCounts.upgrade2);
  localStorage.setItem('upgrade2Cost', upgradeCosts.upgrade2);
  localStorage.setItem('upgrade3Count', upgradeCounts.upgrade3);
  localStorage.setItem('upgrade3Cost', upgradeCosts.upgrade3);
  localStorage.setItem('upgrade4Count', upgradeCounts.upgrade4);
  localStorage.setItem('upgrade4Cost', upgradeCosts.upgrade4);
  localStorage.setItem('upgrade5Count', upgradeCounts.upgrade5);
  localStorage.setItem('upgrade5Cost', upgradeCosts.upgrade5);
  localStorage.setItem('upgrade6Count', upgradeCounts.upgrade6);
  localStorage.setItem('upgrade6Cost', upgradeCosts.upgrade6);
  localStorage.setItem('upgrade7Count', upgradeCounts.upgrade7);
  localStorage.setItem('upgrade7Cost', upgradeCosts.upgrade7);
  localStorage.setItem('upgrade8Count', upgradeCounts.upgrade8);
  localStorage.setItem('upgrade8Cost', upgradeCosts.upgrade8);
}, 100);

document.addEventListener('load', startGame)
updatePointsDisplay()
