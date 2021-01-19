const calcAverage = (a, b, c) => (a + b + c)/3;
console.log(calcAverage(3,4,5));

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas =   calcAverage(65,54,49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas)
{
    if(avgDolphins >= 2*avgKoalas)
        {
            console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
        }
    else if(avgKoalas >= 2*avgDolphins)
        {
            console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
        }
    else{
        console.log('No one wins the game');
    }
}
checkWinner(scoreDolphins, scoreKoalas);