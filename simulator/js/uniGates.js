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
        var input = "1";
      } else {
        input = "0";
      }
      return input;
    }

    function and(input1, input2, out) {
      if (input1 & input2) {
        document.querySelectorAll(".and")[out].style.backgroundColor = "#7FFF00";
      } else {
        document.querySelectorAll(".and")[out].style.backgroundColor = "#FF0000";
      }
      return out;
    }

    function mux(input1, input2, sel, enable, out) {
      if (enable) {
        document.querySelectorAll(".mux")[out].style.backgroundColor = "#FF0000";
      } else {
        if (sel) {
          if (input2) {
            document.querySelectorAll(".mux")[out].style.backgroundColor = "#7FFF00";
          } else {
            document.querySelectorAll(".mux")[out].style.backgroundColor = "#FF0000";
          }
        } else {
          if (input1) {
            document.querySelectorAll(".mux")[out].style.backgroundColor = "#7FFF00";
          } else {
            document.querySelectorAll(".mux")[out].style.backgroundColor = "#FF0000";
          }
        }
      }
      return out;
    }

    function or(input1, input2, out) {
      if (input1 | input2) {
        document.querySelectorAll(".or")[out].style.backgroundColor = "#7FFF00";
      } else {
        document.querySelectorAll(".or")[out].style.backgroundColor = "#FF0000";
      }
      return out;
    }

    function nand(input1, input2, out) {
      if (!(input1 & input2)) {
        document.querySelectorAll(".nand")[out].style.backgroundColor = "#7FFF00";
      } else {
        document.querySelectorAll(".nand")[out].style.backgroundColor = "#FF0000";
      }
      return out;
    }

    function nor(input1, input2, out) {
      if (!(input1 | input2)) {
        document.querySelectorAll(".nor")[out].style.backgroundColor = "#7FFF00";
      } else {
        document.querySelectorAll(".nor")[out].style.backgroundColor = "#FF0000";
      }
      return out;
    }

    function xor(input1, input2, out) {
      if (input1 ^ input2) {
        document.querySelectorAll(".xor")[out].style.backgroundColor = "#7FFF00";
      } else {
        document.querySelectorAll(".xor")[out].style.backgroundColor = "#FF0000";
      }
      return out;
    }

    var andInputs = [];
    for (var j = 1; j < 9; j++) {
      var andGate = "#and" + j;
      document.querySelector(andGate).addEventListener('change', checking);
      andInputs.push(checking(document.querySelector(andGate)));
    }
    console.log(andInputs);

    var orInputs = [];
    for (var j = 1; j < 9; j++) {
      var orGate = "#or" + j;
      document.querySelector(orGate).addEventListener('change', checking);
      orInputs.push(checking(document.querySelector(orGate)));
    }

    var nandInputs = [];
    for (var j = 1; j < 9; j++) {
      var nandGate = "#nand" + j;
      document.querySelector(nandGate).addEventListener('change', checking);
      nandInputs.push(checking(document.querySelector(nandGate)));
    }

    var norInputs = [];
    for (var j = 1; j < 9; j++) {
      var norGate = "#nor" + j;
      document.querySelector(norGate).addEventListener('change', checking);
      norInputs.push(checking(document.querySelector(norGate)));
    }

    var xorInputs = [];
    for (var j = 1; j < 9; j++) {
      var xorGate = "#xor" + j;
      document.querySelector(xorGate).addEventListener('change', checking);
      xorInputs.push(checking(document.querySelector(xorGate)));
    }

    var main = ["And", "Or", "Nand", "Nor", "Xor"];
    var vccVal = [];
    var groundVal = [];
    for (var k = 0; k < 5; k++) {
      var grounds = ".ground" + main[k];
      var vccs = ".vcc" + main[k];
      groundVal.push(checking(document.querySelector(grounds)));
      vccVal.push(checking(document.querySelector(vccs)));
    }

    if ((vccVal[0] == 1) && (groundVal[0] == 1)) {
      and(andInputs[0], andInputs[1], 0);
      and(andInputs[2], andInputs[3], 1);
      and(andInputs[4], andInputs[5], 3);
      and(andInputs[6], andInputs[7], 2);
    } else {
      if ((andInputs.every(item => item == 0)) == false) {
        alert("Turn on both the vcc and ground for AND gate IC.")
      }
    }

    if ((vccVal[1] == 1) && (groundVal[1] == 1)) {
      or(orInputs[0], orInputs[1], 0);
      or(orInputs[2], orInputs[3], 1);
      or(orInputs[4], orInputs[5], 3);
      or(orInputs[6], orInputs[7], 2);
    } else {
      if ((orInputs.every(item => item == 0)) == false) {
        alert("Turn on both the vcc and ground for OR gate IC.")
      }
    }
    if ((vccVal[2] == 1) && (groundVal[2] == 1)) {
      nand(nandInputs[0], nandInputs[1], 0);
      nand(nandInputs[2], nandInputs[3], 1);
      nand(nandInputs[4], nandInputs[5], 3);
      nand(nandInputs[6], nandInputs[7], 2);
    } else {
      if ((nandInputs.every(item => item == 0)) == false) {
        alert("Turn on both the vcc and ground for NAND gate IC.")
      }
    }
    if ((vccVal[3] == 1) && (groundVal[3] == 1)) {
      nor(norInputs[0], norInputs[1], 0);
      nor(norInputs[2], norInputs[3], 1);
      nor(norInputs[4], norInputs[5], 3);
      nor(norInputs[6], norInputs[7], 2);
    } else {
      if ((norInputs.every(item => item == 0)) == false) {
        alert("Turn on both the vcc and ground for NOR gate IC.")
      }
    }
    if ((vccVal[4] == 1) && (groundVal[4] == 1)) {
      xor(xorInputs[0], xorInputs[1], 0);
      xor(xorInputs[2], xorInputs[3], 1);
      xor(xorInputs[4], xorInputs[5], 3);
      xor(xorInputs[6], xorInputs[7], 2);
    } else {
      if ((xorInputs.every(item => item == 0)) == false) {
        alert("Turn on both the vcc and ground for XOR gate IC.")
      }
    }

    setTimeout(function() {
      alert("Power is turned on. Restart the power button after any changes.");
    }, 1000);
  } else {
    var numButtons = document.querySelectorAll(".off").length;
    for (var i = 0; i < numButtons; i++) {
      document.querySelectorAll(".off")[i].style.backgroundColor = "#efefef";
      console.log("Powered down");
    }
  }
}
