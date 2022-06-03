function findPrime(...array){

    let primes = "";

    for (let i = 0; i < array.length; i++) {
        var control = true;
        for (let j = 2; j < array[i]; j++) {
            if (array[i] % j == 0) {
                control = false;
            }
        }

        if (control == true) {
            primes += array[i] + " ";
        }
    }

    return primes;
}

//console.log(findPrime(1,2,3,4,5,6,7,8,9,10))

function friendsNumber(num1, num2){
    let j;
    let sum = 0;
    let sum2 = 0;
    for (let i = 0; i < num1; i++) {
        if(num1 % i == 0){
            sum += i;
        }
        
    }
    console.log(sum)

    for (let i = 0; i < num2; i++) {
        if(num2 % i == 0){
            sum2 += i;
        }
        
    }
    console.log(sum2)

    if(sum == num2 && sum2 == num1){
        console.log(num1 + " ve " + num2 + " arkadaş sayılardır.")
    }
    else
        console.log(num1 + " ve " + num2 + " arkadaş sayı değildir.")

}

//friendsNumber(2250, 284)

function perfectNumbers(){

    let perfectNumbers = "";

    for (let i = 1; i < 1000; i++) {
        let positiveDivisor = 0;
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                positiveDivisor += j;
            }
        }
        if (positiveDivisor == i) {
            perfectNumbers += i + " ";
        }
    }

    console.log(perfectNumbers);

}

// perfectNumbers()

function primeNumbers (){

    let primeNumbers = ""

    for(let i = 2; i<1000 ; i++){
        let control = true;
            for(let j = 2; j<i; j++){
                if(i%j == 0){
                    control = false
                }
            }

            if(control == true){
                primeNumbers += i + " ";
            }
    }

    console.log(primeNumbers)

}

primeNumbers()