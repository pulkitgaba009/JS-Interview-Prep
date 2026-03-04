// by coverting in string
function FindNumbersWithEvenNumberOfDigits(nums){
    let count = 0 ;

    for ( number of nums ){
        const num = Math.abs(number);
        const n = String(num);
        const length = n.length;

        if (length%2==0){
            count++;
        }
    }

    return count;
}

console.log(FindNumbersWithEvenNumberOfDigits([12,345,2,6,7896]));

// By number
function FindNumbersWithEvenNumberOfDigits(nums){
    let count = 0 ;

    for (let number of nums){
        // number = Math.abs(number);

        let digits = 0 ;
        let n = 0 ;
        
        while( number > 0 ){
            number /= 10;
            digits++;
        }

        if ( digits%2===0 ){
            count++;
        }
    }
    return count;
}

console.log(FindNumbersWithEvenNumberOfDigits([12,345,2,6,7896,-45]));