function romanToInt(s: string): number {
    const myObj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };
    type sr = 'I' | "V" | "X" | "L" | "C" | "D" | "M";
    const lastValue: sr = s[s.length -1] as sr

    let initialValue = myObj[lastValue];

    for (let i = s.length - 1; i >= 0; i--) {

        const currValue: sr = s[i] as sr
        const nextValue: sr = s[i - 1] as sr

        if (i == 0) {
            break;
        }
        if (myObj[currValue] <= myObj[nextValue]) {
            initialValue += myObj[nextValue];
        }else{
            initialValue -= myObj[nextValue]
        }
    }


    return initialValue
}


console.log(romanToInt("MCMXCIV"))