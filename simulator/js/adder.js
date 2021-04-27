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

    var adderAInputs = [];
    var adderBInputs = [];
    for (var j = 1; j < 5; j++) {
      var adderA = "#adderA" + j;
      var adderB = "#adderB" + j;
      document.querySelector(adderA).addEventListener('change', checking);
      adderAInputs.push(checking(document.querySelector(adderA)));
      document.querySelector(adderB).addEventListener('change', checking);
      adderBInputs.push(checking(document.querySelector(adderB)));
    }
    var adderCi = [];
    document.querySelector("#adderC0").addEventListener('change', checking);
    adderCi.push(checking(document.querySelector("#adderC0")));

    function bin_to_dec(bstr) {
    return parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 2);
    }

    var fullAdderA = bin_to_dec(adderAInputs.join(""));
    var fullAdderB = bin_to_dec(adderBInputs.join(""));
    var fullAdderC = bin_to_dec(adderCi.join(""));
    var fullAdderS = ((fullAdderA + fullAdderB + fullAdderC).toString(2)).split("");
    if (fullAdderS.length == 4) {
      fullAdderS.unshift(0);
    } else {
      var z = 4;
    }
    console.log(fullAdderS);
    console.log(fullAdderA);
    console.log(fullAdderB );

    var main = ["Adder"];
    var vccVal = [];
    var groundVal = [];
    for (var k = 0; k < 1; k++) {
      var grounds = ".ground" + main[k];
      var vccs = ".vcc" + main[k];
      groundVal.push(checking(document.querySelector(grounds)));
      vccVal.push(checking(document.querySelector(vccs)));
    }


    function adder(input1, sum) {
      if (input1 == 1) {
        document.querySelectorAll(".adder")[sum].style.backgroundColor = "#7FFF00";
      } else {
        document.querySelectorAll(".adder")[sum].style.backgroundColor = "#FF0000";
      }
      if ((fullAdderS[0]) == 1) {
        document.querySelectorAll(".adderC")[0].style.backgroundColor = "#7FFF00";
      } else {
        document.querySelectorAll(".adderC")[0].style.backgroundColor = "#FF0000";
      }
    }

    if ((vccVal[0] == 1) && (groundVal[0] == 1)) {
      adder(fullAdderS[1],3);
      adder(fullAdderS[2],0);
      adder(fullAdderS[3],1);
      adder(fullAdderS[4],2);
    }else {
      if (((adderAInputs.every(item => item == 0)) && ((adderBInputs.every(item => item == 0)))) == false) {
        alert("Turn on both the vcc and ground for Full Adder IC.")
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
