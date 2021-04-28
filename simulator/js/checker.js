/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var power = document.querySelector("#accept");
power.addEventListener('change', checkPower);

function checkPower() {
  if (power.checked) {
    console.log("Powered up");

    function checking(checkBox) {
      if (checkBox.checked) {
        var input = 1;
      } else {
        input = 0;
      }
      return input;
    }

    var main = ["Checker", "BCD", "Excess"];
    var vccVal = [];
    var groundVal = [];
    for (var k = 0; k < 3; k++) {
      var grounds = ".ground" + main[k];
      var vccs = ".vcc" + main[k];
      groundVal.push(checking(document.querySelector(grounds)));
      vccVal.push(checking(document.querySelector(vccs)));
    }

    var checkerInputs = [];
    for (var j = 0; j < 8; j++) {
      var checkers = "#checker" + j;
      document.querySelector(checkers).addEventListener('change', checking);
      checkerInputs.push(checking(document.querySelector(checkers)));
    }

    var checkEO = [];
    document.querySelector("#even").addEventListener('change', checking);
    checkEO.push(checking(document.querySelector("#even")));
    document.querySelector("#odd").addEventListener('change', checking);
    checkEO.push(checking(document.querySelector("#odd")));

    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
    var numOf1 = countOccurrences(checkerInputs,1);


    function checker() {
      if (checkEO[0] == checkEO[1]) {
        if (checkEO[0] == 0) {
        document.querySelectorAll(".checker")[0].style.backgroundColor = "#7FFF00";
        document.querySelectorAll(".checker")[1].style.backgroundColor = "#7FFF00";
      } else {
        document.querySelectorAll(".checker")[0].style.backgroundColor = "#FF0000";
        document.querySelectorAll(".checker")[1].style.backgroundColor = "#FF0000";
        }
      }
      if ((checkEO[0] == 1) && (checkEO[1] == 0)) {
        if (numOf1 % 2 == 0) {
          document.querySelectorAll(".checker")[0].style.backgroundColor = "#7FFF00";
          document.querySelectorAll(".checker")[1].style.backgroundColor = "#FF0000";
        } else {
          document.querySelectorAll(".checker")[1].style.backgroundColor = "#7FFF00";
          document.querySelectorAll(".checker")[0].style.backgroundColor = "#FF0000";
        }
      }
      if ((checkEO[0] == 0) && (checkEO[1] == 1)) {
        if (numOf1 % 2 == 1) {
          document.querySelectorAll(".checker")[0].style.backgroundColor = "#7FFF00";
          document.querySelectorAll(".checker")[1].style.backgroundColor = "#FF0000";
        } else {
          document.querySelectorAll(".checker")[1].style.backgroundColor = "#7FFF00";
          document.querySelectorAll(".checker")[0].style.backgroundColor = "#FF0000";
        }
      }
    }

    var bcdInputs = [];
    for (var j = 0; j < 4; j++) {
      var bcd = "#bcd" + j;
      document.querySelector(bcd).addEventListener('change', checking);
      bcdInputs.push(checking(document.querySelector(bcd)));
    }

    eInputs = [];
    for (var j = 0; j < 4; j++) {
      var excess = "#excess" + j;
      document.querySelector(excess).addEventListener('change', checking);
      eInputs.push(checking(document.querySelector(excess)));
    }
    eIn = eInputs.reverse();
    var q = (eIn[0]*eIn[1]) | (eIn[0]*eIn[2]*eIn[3]);
    var w = ((!eIn[1])*(!eIn[2])) | ((!eIn[1])*(!eIn[3])) | (eIn[1]*eIn[2]*eIn[3]);
    var e = ((!eIn[2])*(eIn[3])) | ((eIn[2])*(!eIn[3]));
    var r = (!eIn[3]) * 1;

    eOut = [];
    eOut.push(q);
    eOut.push(w);
    eOut.push(e);
    eOut.push(r);

    function bin_to_dec(bstr) {
    return parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 2);
    }

    var bcdInputs1 = bcdInputs.reverse();
    var bcdIn = bin_to_dec(bcdInputs1.join(""));


    var excessInput = bin_to_dec(eOut.join(""))

    console.log(eIn, eOut, excessInput);

    if ((vccVal[1] == 1) && (groundVal[1] == 1)) {
      for (var j=0; j<10; j++) {
        document.querySelectorAll(".bcd")[j].style.backgroundColor = "#7FFF00";
      }
      switch(bcdIn) {
        case 0: document.querySelectorAll(".bcd")[0].style.backgroundColor = "#FF0000"; break;
        case 1: document.querySelectorAll(".bcd")[1].style.backgroundColor = "#FF0000"; break;
        case 2: document.querySelectorAll(".bcd")[2].style.backgroundColor = "#FF0000"; break;
        case 3: document.querySelectorAll(".bcd")[3].style.backgroundColor = "#FF0000"; break;
        case 4: document.querySelectorAll(".bcd")[4].style.backgroundColor = "#FF0000"; break;
        case 5: document.querySelectorAll(".bcd")[5].style.backgroundColor = "#FF0000"; break;
        case 6: document.querySelectorAll(".bcd")[6].style.backgroundColor = "#FF0000"; break;
        case 7: document.querySelectorAll(".bcd")[9].style.backgroundColor = "#FF0000"; break;
        case 8: document.querySelectorAll(".bcd")[8].style.backgroundColor = "#FF0000"; break;
        case 9: document.querySelectorAll(".bcd")[7].style.backgroundColor = "#FF0000"; break;
        default:
         for (var j=0; j<10; j++) {
           document.querySelectorAll(".bcd")[j].style.backgroundColor = "#7FFF00";
         }
      }
    }else {
      if (((bcdInputs.every(item => item == 0))) == false) {
        alert("Turn on both the vcc and ground for BCD to Decimal IC.")
      }
    }

    if ((vccVal[2] == 1) && (groundVal[2] == 1)) {
      for (var j=0; j<10; j++) {
        document.querySelectorAll(".excess")[j].style.backgroundColor = "#7FFF00";
      }
      switch(excessInput) {
        case 0: document.querySelectorAll(".excess")[0].style.backgroundColor = "#FF0000"; break;
        case 1: document.querySelectorAll(".excess")[1].style.backgroundColor = "#FF0000"; break;
        case 2: document.querySelectorAll(".excess")[2].style.backgroundColor = "#FF0000"; break;
        case 3: document.querySelectorAll(".excess")[3].style.backgroundColor = "#FF0000"; break;
        case 4: document.querySelectorAll(".excess")[4].style.backgroundColor = "#FF0000"; break;
        case 5: document.querySelectorAll(".excess")[5].style.backgroundColor = "#FF0000"; break;
        case 6: document.querySelectorAll(".excess")[6].style.backgroundColor = "#FF0000"; break;
        case 7: document.querySelectorAll(".excess")[9].style.backgroundColor = "#FF0000"; break;
        case 8: document.querySelectorAll(".excess")[8].style.backgroundColor = "#FF0000"; break;
        case 9: document.querySelectorAll(".excess")[7].style.backgroundColor = "#FF0000"; break;
        default:
         for (var j=0; j<10; j++) {
           document.querySelectorAll(".excess")[j].style.backgroundColor = "#7FFF00";
         }
      }
    }else {
      if (((eIn.every(item => item == 0))) == false) {
        alert("Turn on both the vcc and ground for Excess-3 to Decimal IC.")
      }
    }

    if ((vccVal[0] == 1) && (groundVal[0] == 1)) {
      checker();
    }else {
      if (((checkerInputs.every(item => item == 0)) && ((checkEO.every(item => item == 0)))) == false) {
        alert("Turn on both the vcc and ground for Parity Checker IC.")
      }
    }

    setTimeout(function(){ alert("Power is turned on. Restart the power button after any changes."); }, 1000);
  } else {
    var numButtons = document.querySelectorAll(".off").length;
    for (var i = 0; i < numButtons; i++) {
      document.querySelectorAll(".off")[i].style.backgroundColor = "#efefef";
      console.log("Powered down");
    }
  }
}
