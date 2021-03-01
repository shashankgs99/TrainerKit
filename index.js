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

    function operate(input1, input2, out) {
      return and(input1, input2, out);
    }
    operation = ["and", "or", "nand", "nor", "xor"];



      if ((vccVal[0] == 1) && (groundVal[0] == 1)) {
        for (var q=0; q< 6; q += 2) {
          for (var w=1; w< 4; w++) {
            var e = w;

          }
          console.log(e);
          console.log(q);
        }
      } else {
        if ((andInputs.every(item => item == 0)) == false) {
          alert("Turn on both the vcc and ground for  gate IC.")
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
