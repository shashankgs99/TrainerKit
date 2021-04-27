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

     function mux(input1, input2, sel, enable, out) {
       if (enable == 0) {
         document.querySelectorAll(".mux")[out].style.backgroundColor = "#FF0000";
       } else {
         if (sel == 1) {
           if (input2 == 1) {
             document.querySelectorAll(".mux")[out].style.backgroundColor = "#7FFF00";
           } else {
             document.querySelectorAll(".mux")[out].style.backgroundColor = "#FF0000";
           }
         } else {
           if (input1 == 1) {
             document.querySelectorAll(".mux")[out].style.backgroundColor = "#7FFF00";
           } else {
             document.querySelectorAll(".mux")[out].style.backgroundColor = "#FF0000";
           }
         }
       }
       return out;
     }

     var muxInputs = [];
     for (var j = 1; j < 9; j++) {
       var muxGate = "#mux" + j;
       document.querySelector(muxGate).addEventListener('change', checking);
       muxInputs.push(checking(document.querySelector(muxGate)));
     }

     var muxSE = [];
     document.querySelector("#muxs").addEventListener('change', checking);
     muxSE.push(checking(document.querySelector("#muxs")));
     document.querySelector("#muxe").addEventListener('change', checking);
     muxSE.push(checking(document.querySelector("#muxe")));

     console.log("MUX INPUTS: ",muxInputs);
     console.log("MUX SELECT AND ENABLE: ",muxSE);

     var demuxInputs = [];
     for (var j = 1; j < 7; j++) {
       var demuxIn = "#demux" + j;
       document.querySelector(demuxIn).addEventListener('change', checking);
       demuxInputs.push(checking(document.querySelector(demuxIn)));
     }

     console.log("DEMUX INPUTS: ",demuxInputs);
//     console.log(demuxInputs);

/*     var adderAInputs = [];
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
     console.log(fullAdderB);
*/
     var main = ["Demux  ", "Mux", "Adder"];
     var vccVal = [];
     var groundVal = [];
     for (var k = 0; k < 2; k++) {
       var grounds = ".ground" + main[k];
       var vccs = ".vcc" + main[k];
       groundVal.push(checking(document.querySelector(grounds)));
       vccVal.push(checking(document.querySelector(vccs)));
     }

     if ((vccVal[1] == 1) && (groundVal[1] == 1)) {
       mux(muxInputs[0], muxInputs[1], muxSE[0], muxSE[1], 0);
       mux(muxInputs[2], muxInputs[3], muxSE[0], muxSE[1], 1);
       mux(muxInputs[5], muxInputs[4], muxSE[0], muxSE[1], 3);
       mux(muxInputs[6], muxInputs[7], muxSE[0], muxSE[1], 2);
     }else {
       if ((muxInputs.every(item => item == 0)) == false) {
         alert("Turn on both the vcc and ground for MUX IC.")
       }
     }

     if ((vccVal[0] == 1) && (groundVal[0] == 1)) {
       function demux() {
         for (var j = 0; j < 4; j++) {
           if (demuxInputs[0] == 1) {
             document.querySelectorAll(".demux")[j].style.backgroundColor = "#7FFF00";
           } else {
             document.querySelectorAll(".demux")[j].style.backgroundColor = "#7FFF00";
             if ((demuxInputs[1] == 0) && (demuxInputs[2] == 0)) {
               document.querySelectorAll(".demux")[0].style.backgroundColor = "#FF0000";
             } else if ((demuxInputs[1] == 1) && (demuxInputs[2] == 0)) {
               document.querySelectorAll(".demux")[1].style.backgroundColor = "#FF0000";
             } else if ((demuxInputs[1] == 0) && (demuxInputs[2] == 1)) {
               document.querySelectorAll(".demux")[2].style.backgroundColor = "#FF0000";
             } else if ((demuxInputs[1] == 1) && (demuxInputs[2] == 1)) {
               document.querySelectorAll(".demux")[3].style.backgroundColor = "#FF0000";
             } else {
               document.querySelectorAll(".demux")[j].style.backgroundColor = "#7FFF00";
             }
           }
         }
       }
       demux();
       function demux2() {
         for (var j = 4; j < 8; j++) {
           if (demuxInputs[3] == 1) {
             document.querySelectorAll(".demux")[j].style.backgroundColor = "#7FFF00";
           } else {
             document.querySelectorAll(".demux")[j].style.backgroundColor = "#7FFF00";
             if ((demuxInputs[4] == 0) && (demuxInputs[5] == 0)) {
               document.querySelectorAll(".demux")[4].style.backgroundColor = "#FF0000";
             } else if ((demuxInputs[4] == 1) && (demuxInputs[5] == 0)) {
               document.querySelectorAll(".demux")[5].style.backgroundColor = "#FF0000";
             } else if ((demuxInputs[4] == 0) && (demuxInputs[5] == 1)) {
               document.querySelectorAll(".demux")[6].style.backgroundColor = "#FF0000";
             } else if ((demuxInputs[4] == 1) && (demuxInputs[5] == 1)) {
               document.querySelectorAll(".demux")[7].style.backgroundColor = "#FF0000";
             } else {
               document.querySelectorAll(".demux")[j].style.backgroundColor = "#7FFF00";
             }
           }
         }
       }
       demux2();
     } else {
     if ((demuxInputs.every(item => item == 0)) == false) {
       alert("Turn on both the vcc and ground for DEMUX IC.")
     }
   }

//     function adder(input1, sum) {
//       if (input1 == 1) {
//         document.querySelectorAll(".adder")[sum].style.backgroundColor = "#7FFF00";
//       } else {
//         document.querySelectorAll(".adder")[sum].style.backgroundColor = "#FF0000";
//       }
//       if ((fullAdderS[0]) == 1) {
//         document.querySelectorAll(".adderC")[0].style.backgroundColor = "#7FFF00";
//       } else {
//         document.querySelectorAll(".adderC")[0].style.backgroundColor = "#FF0000";
//       }
//     }

//     if ((vccVal[2] == 1) && (groundVal[2] == 1)) {
//       adder(fullAdderS[1],3);
//       adder(fullAdderS[2],0);
//       adder(fullAdderS[3],1);
//       adder(fullAdderS[4],2);
//     }else {
//       if (((adderAInputs.every(item => item == 0)) && ((adderBInputs.every(item => item == 0)))) == false) {
//         alert("Turn on both the vcc and ground for Full Adder IC.")
//       }
//     }

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
