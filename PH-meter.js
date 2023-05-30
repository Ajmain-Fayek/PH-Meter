function phLevelCalculate(value) {
    let phLevel;

    switch(true) {
        case value >=0 && value < 3 :
            phLevel = 'Strong Acidic!';
        break;
        case value >= 3 && value <7 :
            phLevel = 'Weak Acidic';
        break;
        case value >= 8 && value < 11 :
            phLevel = 'Strong Basic!';
        break;
        case value >= 11 && value <=14 :
            phLevel = 'Weak Basic';
        break;
        default :
            phLevel = 'Neutral';
        break;
    }
    return phLevel;
}

console.log('Coution! Please Enter Value From Scale 0-14');
console.log(phLevelCalculate(0));
console.log(phLevelCalculate(1));
console.log(phLevelCalculate(2));
console.log(phLevelCalculate(3));
console.log(phLevelCalculate(4));
console.log(phLevelCalculate(5));
console.log(phLevelCalculate(6));
console.log(phLevelCalculate(7));
console.log(phLevelCalculate(8));
console.log(phLevelCalculate(9));
console.log(phLevelCalculate(10));
console.log(phLevelCalculate(11));
console.log(phLevelCalculate(12));
console.log(phLevelCalculate(13));
console.log(phLevelCalculate(14));