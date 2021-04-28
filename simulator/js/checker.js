/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
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

    var main = ["Checker"];
    var vccVal = [];
    var groundVal = [];
    for (var k = 0; k < 1; k++) {
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
