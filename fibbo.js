(function(){
    'use-strict';
    var calculateFibonacciSeries = function(input) { 
        try{
            if(isNaN(parseInt(input)) || input < 0){
                //console.log(new Error("Invalid input."));
                throw new Error("Invalid input.");          
            }
            var series = [];           
            var firstNumber = 0;
            var secondNumber = 1;
            var nextNumber = sum(firstNumber,secondNumber);
            series.push(firstNumber);           
            series.push(secondNumber);
            while(nextNumber < input){
                series.push(nextNumber);
                firstNumber = secondNumber;
                secondNumber = nextNumber;
                nextNumber = sum(firstNumber,secondNumber);nextNumber
            }
            console.log(series);
            return series;
        }catch(err){
           // console.log(err)
        }   
    };
    var sum = function(a, b){ 
        return (parseInt(a)+ parseInt(b));
    };
    module.exports = {
    'getFibonacciSeries' : calculateFibonacciSeries
    };
}());