'use strict';
document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#eingabeFormular')
        .addEventListener('submit', submitverarbeitung);

    document.querySelector('#eingabeFormular')
        .addEventListener('reset', resetverarbeitung);

    function submitverarbeitung() {
        event.preventDefault();
        console.log("Submitverarbeitung");

        //Saves all the elements in variables
        let volt = document.querySelector("#volt");
        let ohm = document.querySelector("#ohm");
        let ampere = document.querySelector("#ampere");

        //Calculated values as variable
        //Wiederstand*Stromstärke
        let ohmAmpere = parseFloat(ohm.value) * parseFloat(ampere.value);
        //Spannung*Wiederstand
        let voltOhm = parseFloat(volt.value) / parseFloat(ohm.value);
        //Spannung*Stromstärke
        let voltAmpere = parseFloat(volt.value) / parseFloat(ampere.value);

        //RoundedValues
        let roundedOhmAmpere = Math.round(ohmAmpere*100)/100;
        let roundedVoltOhm = Math.round(voltOhm*100)/100;
        let roundedvoltAmpere = Math.round(voltAmpere*100)/100;


        let inputVolt = true;
        let inputOhm = true;
        let inputAmpere = true;

        //Logs the values for development purposes
        console.log(volt.value);
        console.log(ohm.value);
        console.log(ampere.value);

        //Checks if volt is empty
        if (volt && volt.value) {
            inputVolt = true;
        }
        else {
            inputVolt = false;
        }

        //Checks if ohm is empty
        if (ohm && ohm.value) {
            inputOhm = true;
        }
        else {
            inputOhm = false;
        }

        //Checks if ampere is empty
        if (ampere && ampere.value) {
            inputAmpere = true;
        }
        else {
            inputAmpere = false;
        }

        if ((inputVolt == false && inputOhm == false && inputAmpere == false) ||
            (inputVolt == true && inputOhm == false && inputAmpere == false) ||
            (inputVolt == false && inputOhm == true && inputAmpere == false) ||
            (inputVolt == false && inputOhm == false && inputAmpere == true)) {
            alert("Dieses Programm benötigt zwei Werte um rechnen zu können.");
            window.location.reload(false);
        }

        else if (inputVolt == true && inputOhm == true && inputAmpere == false) {
            document.querySelector('#output').value = roundedVoltOhm + " Ampère";
        }

        else if (inputVolt == false && inputOhm == true && inputAmpere == true) {
            document.querySelector('#output').value = roundedOhmAmpere + " Volt";
        }

        else if (inputVolt == true && inputOhm == false && inputAmpere == true) {
            document.querySelector('#output').value = roundedvoltAmpere + " Ohm";
        }
        else {
            alert("Dieses Programm kann nur mit maximal zwei Werten rechnen.")
            window.location.reload(false);
        }


    }


    function resetverarbeitung() {
        console.log("Resetverarbeitung");
        //Saves all the elements in variables
        let volt = document.querySelector("#volt");
        let ohm = document.querySelector("#ohm");
        let ampere = document.querySelector("#ampere");

        let inputVolt = true;
        let inputOhm = true;
        let inputAmpere = true;

        //Checks if volt is empty
        if (volt && volt.value) {
            inputVolt = true;
        }
        else {
            inputVolt = false;
        }

        //Checks if ohm is empty
        if (ohm && ohm.value) {
            inputOhm = true;
        }
        else {
            inputOhm = false;
        }

        //Checks if ampere is empty
        if (ampere && ampere.value) {
            inputAmpere = true;
        }
        else {
            inputAmpere = false;
        }

        if (inputVolt == false && inputOhm == false && inputAmpere == false) {
            alert("Du hast noch nichts eingegeben, darum kann auch nichts resetet werden.");
            window.location.reload(false);
        }
    }
});










//document.querySelector("#eingabeFormular").submit();




// var myInput = document.querySelector("#volt");
// if (myInput && myInput.value) {
//     alert("My input has a value!");
// }
// else{
//     alert("My input is empty!");
// }




// document.querySelector('#output').value = "Output";



// document.getElementById("Button").disabled = true;
