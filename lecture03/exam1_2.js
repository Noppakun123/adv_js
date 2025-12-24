let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true, 'Apple',1];
let values3 = ['Mars', 9, 'Apple', 1];

for (let vall of values1) {
    for (let val2 of values2) {
        for (let val3 of values3) {
            if (vall === val2 && vall === val3) {
                console.log(`Common value found: ${vall}`);
            }
        }
    }   
}