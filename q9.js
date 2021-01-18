for (a = 1 ; a < 10 ; ++a){
    for (b = 1 ; b < 10 ; ++b){
        for (c = 1 ; c < 10 ; ++c){
            let pow = (a * a * a + b * b * b + c * c * c);
            let sum = (a * 100 + b * 10 + c);
            if (pow == sum) {
                console.log(sum);
            }
        }
    }
}