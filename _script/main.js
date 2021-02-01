'use strict';
document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#eingabeFormular')
        .addEventListener('submit', submitverarbeitung);


    function submitverarbeitung() {
        event.preventDefault();
        console.log("Submitverarbeitung");

        //Saves all the elements in variables
        let buy = document.querySelector("#buy").value;
        let nextSell = document.querySelector("#nextSell").value;
        let averageSell = document.querySelector("#averageSell").value;

        //All the other variables
        let difference;
        let priceClass;
        let salePrice;
        let salePriceMid;
        let salePriceHigh;
        let salePriceMega;
        let salePricePercent;
        let salePriceSalePercent;
        let profit;


        //Sets the price class for the element.
        SetPriceClass();
        //Calculates the new sale price.
        Round();
        //Chooses which calculator to use for the price class.
        CalculatorDecider();










        //This is the calculator for the mid price class.
        function midCalculator() {
            salePrice = Math.floor(parseInt(salePriceSalePercent));
            difference = parseInt(salePriceMid) - parseInt(buy);
            if(difference <= 9){
                alert("This trade isnt worth it.")
                window.location.reload(false);
            }
            else{
                document.querySelector('#output').value = "Sell the item for " + salePriceMid + "." +" Your profit will be: " + (parseInt(salePriceSalePercent) - parseInt(buy)) + ".";
            }
        }


        //This is the calculator for the high price class.
        function highCalculator() {
            salePrice = Math.floor(parseInt(salePriceSalePercent));
            difference = parseInt(salePriceHigh) - parseInt(buy);
            if(difference <= 24){
                alert("This trade isnt worth it.")
                window.location.reload(false);
            }
            else{
                document.querySelector('#output').value = "Sell the item for " + salePriceHigh + "." +" Your profit will be: " + (parseInt(salePriceSalePercent) - parseInt(buy)) + ".";
            }
        }


        //This is the calculator for the mega price class.
        function megaCalculator() {
            salePrice = Math.floor(parseInt(salePriceSalePercent));
            difference = parseInt(salePriceMega) - parseInt(buy);
            if(difference <= 99){
                alert("This trade isnt worth it.")
                window.location.reload(false);
            }
            else{
                document.querySelector('#output').value = "Sell the item for " + salePriceMega + "." +" Your profit will be: " + (parseInt(salePriceSalePercent) - parseInt(buy)) + ".";
            }
        }



        //This function calls the right calculator for the price class.
        function CalculatorDecider() {
            if (priceClass == "low") {
                //This is empty because the programm should do nothing if this is the case.
            }
            else if (priceClass == "mid") {
                midCalculator();
            }
            else if (priceClass == "high") {
                highCalculator();
            }
            else if (priceClass == "mega") {
                megaCalculator();
            }
            else if (priceClass == "extreme") {
                //This is empty because the programm should do nothing if this is the case.
            }
            else {
                alert("This isnt a valid price class.")
                window.location.reload(false);
            }
        }



        //This function determines what price class the element is in.
        function SetPriceClass() {
            if (parseInt(buy) <= 100) {
                priceClass = "low";
                alert("This trade isnt worth it. You are better of just playing the game until you have more KR to trade with better items.")
                window.location.reload(false);
            }

            else if (parseInt(buy) <= 1000 && parseInt(buy) > 100) {
                priceClass = "mid";
            }

            else if (parseInt(buy) <= 5000 && parseInt(buy) > 1000) {
                priceClass = "high";
            }

            else if (parseInt(buy) <= 10000 && parseInt(buy) > 5000) {
                priceClass = "mega";
                alert("You shouldnt blindly trust the calculator in this price range.");
            }

            else {
                priceClass = "extreme";
                alert("The calculator isnt optimized for a price this high. Please handle this trade by yourself.");
                window.location.reload(false);
            }
        }

        //This function calculates the new sale price.
        function Round() {
            if (priceClass == "mid") {
                //looks if the price / 100 = 0
                if (parseInt(nextSell) % 10 == 0) {
                    salePriceMid = parseInt(nextSell) - 1;
                    salePricePercent = salePriceMid / 100;
                    salePriceSalePercent = salePricePercent * 90;
                }
                else {
                    let added = parseInt(nextSell) + 9;
                    let divided = parseInt(added) / 10;
                    let multiplied = parseInt(divided) * 10;
                    salePriceMid = parseInt(multiplied) - 11;
                    salePricePercent = salePriceMid / 100;
                    salePriceSalePercent = salePricePercent * 90;
                }
            }
            else if (priceClass == "high") {
                //looks if the price / 100 = 0
                if (parseInt(nextSell) % 10 == 0) {
                    salePriceHigh = parseInt(nextSell) - 1;
                    salePricePercent = salePriceHigh / 100;
                    salePriceSalePercent = salePricePercent * 90;
                }
                else {
                    let added = parseInt(nextSell) + 9;
                    let divided = parseInt(added) / 10;
                    let multiplied = parseInt(divided) * 10;
                    salePriceHigh = parseInt(multiplied) - 11;
                    salePricePercent = salePriceHigh / 100;
                    salePriceSalePercent = salePricePercent * 90;
                }
            }
            else if (priceClass == "mega") {
                //looks if the price / 100 = 0
                if (parseInt(nextSell) % 10 == 0) {
                    salePriceMega = parseInt(nextSell) - 1;
                    salePricePercent = salePriceMega / 100;
                    salePriceSalePercent = salePricePercent * 90;
                }
                else {
                    let added = parseInt(nextSell) + 9;
                    let divided = parseInt(added) / 10;
                    let multiplied = parseInt(divided) * 10;
                    salePriceMega = parseInt(multiplied) - 11;
                    salePricePercent = salePriceMega / 100;
                    salePriceSalePercent = salePricePercent * 90;
                }
            }
        }
    }
});










//document.querySelector("#eingabeFormular").submit();


// document.querySelector('#output').value = "Output";