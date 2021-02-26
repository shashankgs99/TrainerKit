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

    andOutputs = [];
    function and(input1, input2, out) {
      if (input1 & input2) {
        document.querySelectorAll(".off")[out].style.backgroundColor = "#7FFF00";
        andOutputs.push(1);
      } else {
        document.querySelectorAll(".off")[out].style.backgroundColor = "#FF0000";
        andOutputs.push(0);
      }
      return out;
    }

    var nandOutputs = [];
    function nand(input1, input2, out) {
      if (!(input1 & input2)) {
        document.querySelectorAll(".off")[out].style.backgroundColor = "#7FFF00";
        nandOutputs.push(1);
      } else {
        document.querySelectorAll(".off")[out].style.backgroundColor = "#FF0000";
        nandOutputs.push(0);
      }
      return out;
    }

    var norOutputs = [];
    function nor(input1, input2, out) {
      if (!(input1 | input2)) {
        document.querySelectorAll(".off")[out].style.backgroundColor = "#7FFF00";
        norOutputs.push(1);
      } else {
        document.querySelectorAll(".off")[out].style.backgroundColor = "#FF0000";
        norOutputs.push(0);
      }
      return out;
    }

    var xorOutputs = [];
    function xor(input1, input2, out) {
      if (input1 ^ input2) {
        document.querySelectorAll(".off")[out].style.backgroundColor = "#7FFF00";
        xorOutputs.push(1);
      } else {
        document.querySelectorAll(".off")[out].style.backgroundColor = "#FF0000";
        xorOutputs.push(0);
      }
      return out;
    }

    var andInputs = [];
    for (var j = 1; j < 9; j++) {
      var andGate = "#and" + j;
      document.querySelector(andGate).addEventListener('change', checking);
      andInputs.push(checking(document.querySelector(andGate)));
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

    var main = ["And", "Nand", "Nor", "Xor"];
    var vccVal = [];
    var groundVal = [];
    for (var k = 0; k < 4; k++) {
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

    if ((vccVal[2] == 1) && (groundVal[2] == 1)) {
      nand(nandInputs[0], nandInputs[1], 8);
      nand(nandInputs[2], nandInputs[3], 9);
      nand(nandInputs[4], nandInputs[5], 11);
      nand(nandInputs[6], nandInputs[7], 10);
    } else {
      if ((nandInputs.every(item => item == 0)) == false) {
        alert("Turn on both the vcc and ground for NAND gate IC.")
      }
    }
    if ((vccVal[3] == 1) && (groundVal[3] == 1)) {
      nor(norInputs[0], norInputs[1], 12);
      nor(norInputs[2], norInputs[3], 13);
      nor(norInputs[4], norInputs[5], 15);
      nor(norInputs[6], norInputs[7], 14);
    } else {
      if ((norInputs.every(item => item == 0)) == false) {
        alert("Turn on both the vcc and ground for NOR gate IC.")
      }
    }
    if ((vccVal[4] == 1) && (groundVal[4] == 1)) {
      xor(xorInputs[0], xorInputs[1], 16);
      xor(xorInputs[2], xorInputs[3], 17);
      xor(xorInputs[4], xorInputs[5], 19);
      xor(xorInputs[6], xorInputs[7], 18);
    } else {
      if ((xorInputs.every(item => item == 0)) == false) {
        alert("Turn on both the vcc and ground for XOR gate IC.")
      }
    }
    setTimeout(function(){ alert("Power is turned on. Restart the power button after any changes."); }, 1000);
    console.log(andOutputs);
    console.log(nandOutputs);
    console.log(norOutputs);
    console.log(xorOutputs);
  } else {
    var numButtons = document.querySelectorAll(".off").length;
    for (var i = 0; i < numButtons; i++) {
      document.querySelectorAll(".off")[i].style.backgroundColor = "#efefef";
      console.log("Powered down");
    }
  }
}
