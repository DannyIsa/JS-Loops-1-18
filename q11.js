let x = 375;
let y = 1569;
let answer = 1;
for (i = 1 ; i < x && i < y ; i++){
    if (x % i === 0 && y % i ===0){
        answer = i;
    }
}
console.log(answer);

