function getValues() {
  var values = [],
      powerAvg = 0,
      power = 0,
      power2 = 0;


  values.push(document.getElementById('val1'));
  values.push(document.getElementById('val2'));
  values.push(document.getElementById('val3'));
  values.push(document.getElementById('val4'));
  values.push(document.getElementById('val5'));
  values.push(document.getElementById('val6'));

  var box3 = parseFloat(document.getElementById('val3').value).toFixed(1);
  var box5 = parseFloat(document.getElementById('val5').value).toFixed(1);

  var box4 = parseFloat(document.getElementById('val4').value).toFixed(1);
  var box6 = parseFloat(document.getElementById('val6').value).toFixed(1);


  var power_dust = (box3 * box5).toFixed(1) + " Watts";
  var power_frag = (box4 * box6).toFixed(1) + " Watts";

  document.getElementById("generatedCode").innerHTML = power_dust;
  document.getElementById("generatedCode2").innerHTML = power_frag;

}


function outputUpdate(vol) {
  document.querySelector('#volume').value = vol;
}


// Preset creation 
const db = require('electron-db');
const electron = require('electron');
const app = electron.app || electron.remote.app;

db.createTable('presets', (succ, msg) => {
  // succ = boolean
  console.log("success: " + succ);
  console.log("The preset table has been created: " + msg);
})

function createPreset() {
  let users = new Object();

  users.name = document.getElementById('name').value;
  users.dust_pw = parseFloat(document.getElementById('val1').value);
  users.frag_pw = parseFloat(document.getElementById('val2').value);
  users.dust_hz = parseFloat(document.getElementById('val3').value);
  users.frag_hz = parseFloat(document.getElementById('val4').value);
  users.dust_en = parseFloat(document.getElementById('val5').value);
  users.frag_en = parseFloat(document.getElementById('val6').value);

  db.insertTableContent('presets', users, (succ, msg) => {
    // succ = boolean
    console.log("success: " + succ);
    console.log("The preset table has been created: " + msg);
  })

  var prettifyUsers = JSON.stringify(users, null, 2);
  console.log(prettifyUsers);
}

function loadPreset() {
  db.getRows('presets', {
    name: document.getElementById('name').value}, (succ, result) => {
      console.log("success: " + succ);
      console.log("Result: " + result);
      document.getElementById('val1').value = result["0"].dust_pw;
      document.getElementById('val2').value = result["0"].frag_pw;
      document.getElementById('val3').value = result["0"].dust_hz;
      document.getElementById('val4').value = result["0"].frag_hz;
      document.getElementById('val5').value = result["0"].dust_en;
      document.getElementById('val6').value = result["0"].frag_en;
    })
  getValues();
}


// development testing stuff
  // for ( var j = 0; j < analogInputCh.length; j++) {
  //   console.log(val[j]);
  // }
  //
  // for (var i = 0; i < analogInputCh.length; i++) {
  //   if (i % 2 == 0){
  //     evens += val[i].value + "<br><br>";
  //   } else {
  //     odds += val[i].value + "<br><br>";
  //   }
  //     power = val[i];
  //     power2 = val[i + 2];
  // }
  //var power = val[i] + val[i + 2];

  //powerAvg += power * power2;


