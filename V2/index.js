let sefreSadom, sefreSanie, sefreDaghighe, sefreSaat;
function startandstop() {
  if (document.getElementById("StartStopb").innerHTML === "start") {
    zamaneStart = new Date();
    shomarande = setInterval(idk, 10);
    document.getElementById("StartStopb").innerHTML = "stop";
  } else if (document.getElementById("StartStopb").innerHTML === "stop") {
    clearInterval(shomarande);
    zamaneStop = new Date();
    document.getElementById("StartStopb").innerHTML = "restart";
  } else if (document.getElementById("StartStopb").innerHTML === "restart") {
    zamaneReStart = new Date();
    ekhtelafZaman = new Date();
    ekhtelafZaman.setTime(zamaneReStart.getTime() - zamaneStop.getTime());
    zamaneStart.setTime(zamaneStart.getTime() + ekhtelafZaman.getTime());
    shomarande = setInterval(idk, 10);
    document.getElementById("StartStopb").innerHTML = "stop";
  }
  function idk() {
    zamaneBaad = new Date();
    zamaneBaad.setTime(zamaneBaad.getTime() - zamaneStart.getTime());
    if (zamaneBaad.getUTCMilliseconds() <= 99) {
      sefreSadom = 0;
    } else if (99 < zamaneBaad.getUTCMilliseconds()) {
      sefreSadom = "";
    }
    if (zamaneBaad.getUTCSeconds() <= 9) {
      sefreSanie = 0;
    } else if (zamaneBaad.getUTCSeconds() > 9) {
      sefreSanie = "";
    }
    if (zamaneBaad.getUTCMinutes() <= 9) {
      sefreDaghighe = 0;
    } else if (zamaneBaad.getUTCMinutes() > 9) {
      sefreDaghighe = "";
    }
    if (zamaneBaad.getUTCHours() <= 9) {
      sefreSaat = 0;
    } else if (zamaneBaad.getUTCHours() > 9) {
      sefreSaat = "";
    }
    document.getElementById("natije").innerHTML = "" + sefreSaat +zamaneBaad.getUTCHours() + ":" + sefreDaghighe + zamaneBaad.getUTCMinutes() + ":" + sefreSanie + zamaneBaad.getUTCSeconds() + ":" + sefreSadom + zamaneBaad.getUTCMilliseconds().toString().slice(0 ,-1)
  }
}
function restKonande() {
  zamaneStart = new Date();
  document.getElementById("natije").innerHTML = "00:00:00:00";
}
