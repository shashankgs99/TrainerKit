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

q_out = 0;
function jk(clk, clr, j, k, out1, out2) {
  if (clk == 1) {
    if ((j == 1) && (k == 0)) {
      document.querySelectorAll(".JK")[out1].style.backgroundColor = "#7FFF00";
      document.querySelectorAll(".JK")[out2].style.backgroundColor = "#FF0000";
      q_out = 1;
    }
    if ((j == 0) && (k == 1)) {
      document.querySelectorAll(".JK")[out2].style.backgroundColor = "#7FFF00";
      document.querySelectorAll(".JK")[out1].style.backgroundColor = "#FF0000";
      q_out = 0;
    }
    if ((j == 1) && (k == 1) && (power.checked)) {
      var myVar = setInterval(setColor, 500);
        function setColor() {
          document.querySelectorAll(".JK")[out1].style.backgroundColor = document.querySelectorAll(".JK")[out1].style.backgroundColor == "red" ? "#7FFF00" : "red";
          document.querySelectorAll(".JK")[out2].style.backgroundColor = document.querySelectorAll(".JK")[out2].style.backgroundColor == "chartreuse" ? "#FF0000" : "chartreuse";
          }

          function stopColor() {
            clearInterval(myVar);
          }
          if ((clk == 0) || (power.checked == false)) {
            stopColor();
          }
          q_out = 1;
      }
      if ((j == 0) && (k == 0)) {
        if (q_out = 1) {
          document.querySelectorAll(".JK")[out1].style.backgroundColor = "#7FFF00";
          document.querySelectorAll(".JK")[out2].style.backgroundColor = "#FF0000";
        } else {
          document.querySelectorAll(".JK")[out2].style.backgroundColor = "#7FFF00";
          document.querySelectorAll(".JK")[out1].style.backgroundColor = "#FF0000";
        }
      }
    }
  }

  function d_ff(pre, clr, clk, d, out1, out2) {
    if ((pre == 0) && (clr == 1)) {
      document.querySelectorAll(".d-ff")[out1].style.backgroundColor = "#7FFF00";
      document.querySelectorAll(".d-ff")[out2].style.backgroundColor = "#FF0000";
    }
    if ((pre == 1) && (clr == 0)) {
      document.querySelectorAll(".d-ff")[out2].style.backgroundColor = "#7FFF00";
      document.querySelectorAll(".d-ff")[out1].style.backgroundColor = "#FF0000";
    }
    if ((pre == 0) && (clr == 0)) {
      document.querySelectorAll(".d-ff")[out1].style.backgroundColor = "#7FFF00";
      document.querySelectorAll(".d-ff")[out2].style.backgroundColor = "#7FFF00";
    }
    if ((pre == 1) && (clr == 1) && (clk == 1) && (d == 1)) {
      document.querySelectorAll(".d-ff")[out1].style.backgroundColor = "#7FFF00";
      document.querySelectorAll(".d-ff")[out2].style.backgroundColor = "#FF0000";
    }
    if ((pre == 1) && (clr == 1) && (clk == 1) && (d == 0)) {
      document.querySelectorAll(".d-ff")[out2].style.backgroundColor = "#7FFF00";
      document.querySelectorAll(".d-ff")[out1].style.backgroundColor = "#FF0000";
    }
  }

     var clocks = [];
     for (var j =1; j<5; j++) {
       var clock = "#clock" + j;
       document.querySelector(clock).addEventListener('change', checking);
       clocks.push(checking(document.querySelector(clock)));
     }

     var clears = [];
     for (var j =1; j<5; j++) {
       var clear = "#clear" + j;
       document.querySelector(clear).addEventListener('change', checking);
       clears.push(checking(document.querySelector(clear)));
     }

     var presets = [];
     for (var j =1; j<3; j++) {
       var preset = "#preset" + j;
       document.querySelector(preset).addEventListener('change', checking);
       presets.push(checking(document.querySelector(preset)));
     }

     var jInputs = [];
     for (var j =1; j<3; j++) {
       var jIn = "#j" + j;
       document.querySelector(jIn).addEventListener('change', checking);
       jInputs.push(checking(document.querySelector(jIn)));
     }

     var kInputs = [];
     for (var j =1; j<3; j++) {
       var kIn = "#k" + j;
       document.querySelector(kIn).addEventListener('change', checking);
       kInputs.push(checking(document.querySelector(kIn)));
     }

     var dInputs = [];
     for (var j =1; j<3; j++) {
       var dIn = "#d" + j;
       document.querySelector(dIn).addEventListener('change', checking);
       dInputs.push(checking(document.querySelector(dIn)));
     }

     var jkInputs = clocks.concat(clears, jInputs, kInputs);

     var main = ["JK","D"];
     var vccVal = [];
     var groundVal = [];
     for (var k = 0; k < 2; k++) {
       var grounds = ".ground" + main[k];
       var vccs = ".vcc" + main[k];
       groundVal.push(checking(document.querySelector(grounds)));
       vccVal.push(checking(document.querySelector(vccs)));
     }

     if ((vccVal[0] == 1) && (groundVal[0] == 1)) {
       jk(clocks[0], clears[0], jInputs[0], kInputs[0], 1, 0);
       jk(clocks[1], clears[1], jInputs[1], kInputs[1], 2, 3);
     }else {
       if ((jkInputs.every(item => item == 0)) == false) {
         alert("Turn on both the vcc and ground for JK Flip Flop.")
       }
     }

     var dFFInputs = clocks.concat(clears, presets, dInputs);
     console.log(clears, clocks, presets, dInputs);

     if ((vccVal[1] == 1) && (groundVal[1] == 1)) {
       d_ff(presets[0], clears[2], clocks[2], dInputs[0], 0, 1);
       d_ff(presets[1], clears[3], clocks[3], dInputs[1], 2, 3);
     }else {
       if ((dFFInputs.every(item => item == 0)) == false) {
         alert("Turn on both the vcc and ground for D Flip Flop.")
       }
     }

     setTimeout(function(){ alert("Power is turned on. Restart the power button after any changes."); }, 100);
   } else {
     var numButtons = document.querySelectorAll(".off").length;
     for (var i = 0; i < numButtons; i++) {
       document.querySelectorAll(".off")[i].style.backgroundColor = "#efefef";
       console.log("Powered down");
     }
   }
 }


 function powerControl() {
     var image = document.getElementById('powerImage');
     if (image.src.match("on")) {
       image.src = "images/power_off.png";
       image.style.boxShadow = "none";
     } else {
       image.src = "images/power_on.png";
       image.style.boxShadow = "0px 0px 5px red";
     }
   }
