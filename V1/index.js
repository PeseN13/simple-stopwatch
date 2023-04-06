let sadomsanie = 0,
  sanie = 0,
  daghighe = 0,
  saat = 0,
  sefreSadom,
  sefreSanie,
  sefreDaghighe,
  sefreSaat;
function startandstop() {
  if (document.getElementById("StartStopb").innerHTML === "start") {
    shomarande = setInterval(time, 10);
    document.getElementById("StartStopb").innerHTML = "stop";
  } else if (document.getElementById("StartStopb").innerHTML === "stop") {
    clearInterval(shomarande);
    document.getElementById("StartStopb").innerHTML = "start";
  }
}
function restKonande() {
  sadomsanie = 0;
  sanie = 0;
  daghighe = 0;
  saat = 0;
  document.getElementById("natije").innerHTML = "00:00:00:00";
}
function time() {
  sadomsanie++;
  if (sadomsanie === 100) {
    sanie++;
    sadomsanie = 0;
  }
  if (sanie === 60) {
    daghighe++;
    sanie = 0;
  }
  if (daghighe === 60) {
    saat++;
    daghighe = 0;
  }
  if (sanie <= 9) {
    sefreSanie = 0;
  } else if (sanie > 9) {
    sefreSanie = "";
  }
  if (sadomsanie <= 9) {
    sefreSadom = 0;
  } else if (sadomsanie > 9) {
    sefreSadom = "";
  }
  if (daghighe <= 9) {
    sefreDaghighe = 0;
  } else if (daghighe > 9) {
    sefreDaghighe = "";
  }
  if (saat <= 9) {
    sefreSaat = 0;
  } else if (saat > 9) {
    sefreSaat = "";
  }

  document.getElementById("natije").innerHTML =
    "" +
    sefreSaat +
    saat +
    ":" +
    sefreDaghighe +
    daghighe +
    ":" +
    sefreSanie +
    sanie +
    ":" +
    sefreSadom +
    sadomsanie;
}

