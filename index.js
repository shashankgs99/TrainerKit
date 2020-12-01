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
        document.querySelectorAll(".off")[out].style.backgroundColor = "#008000";
      } else {
        document.querySelectorAll(".off")[out].style.backgroundColor = "#FF0000";
      }
      return out;
    }

    function or(input1, input2, out) {
      if (input1 | input2) {
        document.querySelectorAll(".off")[out].style.backgroundColor = "#008000";
      } else {
        document.querySelectorAll(".off")[out].style.backgroundColor = "#FF0000";
      }
      return out;
    }

    function nand(input1, input2, out) {
      if (!(input1 & input2)) {
        document.querySelectorAll(".off")[out].style.backgroundColor = "#008000";
      } else {
        document.querySelectorAll(".off")[out].style.backgroundColor = "#FF0000";
      }
      return out;
    }

    function nor(input1, input2, out) {
      if (!(input1 | input2)) {
        document.querySelectorAll(".off")[out].style.backgroundColor = "#008000";
      } else {
        document.querySelectorAll(".off")[out].style.backgroundColor = "#FF0000";
      }
      return out;
    }

    function xor(input1, input2, out) {
      if (input1 ^ input2) {
        document.querySelectorAll(".off")[out].style.backgroundColor = "#008000";
      } else {
        document.querySelectorAll(".off")[out].style.backgroundColor = "#FF0000";
      }
      return out;
    }

    var andInputs =[];
    for (var j = 1; j < 9; j++) {
      var andGate = "#and" + j;
      document.querySelector(andGate).addEventListener('change', checking);
      andInputs.push(checking(document.querySelector(andGate)));
    }

    var orInputs =[];
    for (var j = 1; j < 9; j++) {
      var orGate = "#or" + j;
      document.querySelector(orGate).addEventListener('change', checking);
      orInputs.push(checking(document.querySelector(orGate)));
    }

    var nandInputs =[];
    for (var j = 1; j < 9; j++) {
      var nandGate = "#nand" + j;
      document.querySelector(nandGate).addEventListener('change', checking);
      nandInputs.push(checking(document.querySelector(nandGate)));
    }

    var norInputs =[];
    for (var j = 1; j < 9; j++) {
      var norGate = "#nor" + j;
      document.querySelector(norGate).addEventListener('change', checking);
      norInputs.push(checking(document.querySelector(norGate)));
    }

    var xorInputs =[];
    for (var j = 1; j < 9; j++) {
      var xorGate = "#xor" + j;
      document.querySelector(xorGate).addEventListener('change', checking);
      xorInputs.push(checking(document.querySelector(xorGate)));
    }

    and(andInputs[0], andInputs[1], 0);
    and(andInputs[2], andInputs[3], 1);
    and(andInputs[4], andInputs[5], 3);
    and(andInputs[6], andInputs[7], 2);

    or(orInputs[0], orInputs[1], 4);
    or(orInputs[2], orInputs[3], 5);
    or(orInputs[4], orInputs[5], 7);
    or(orInputs[6], orInputs[7], 6);

    nand(nandInputs[0], nandInputs[1], 8);
    nand(nandInputs[2], nandInputs[3], 9);
    nand(nandInputs[4], nandInputs[5], 11);
    nand(nandInputs[6], nandInputs[7], 10);

    nor(norInputs[0], norInputs[1], 12);
    nor(norInputs[2], norInputs[3], 13);
    nor(norInputs[4], norInputs[5], 15);
    nor(norInputs[6], norInputs[7], 14);

    xor(xorInputs[0], xorInputs[1], 16);
    xor(xorInputs[2], xorInputs[3], 17);
    xor(xorInputs[4], xorInputs[5], 19);
    xor(xorInputs[6], xorInputs[7], 18);
  } else {

    var numButtons = document.querySelectorAll(".off").length;
    for (var i = 0; i < numButtons; i++) {
      document.querySelectorAll(".off")[i].style.backgroundColor = "#FFF";
      console.log("Powered down");
    }
  }
}
