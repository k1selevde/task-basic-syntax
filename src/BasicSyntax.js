const dictMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
])

export function romanToInteger(str) {
    let result = 0, previous = 0;

    const revSymbols = str.split('').reverse()

    for (const symbol of revSymbols) {
        let current = dictMap.get(symbol);

        current >= previous ? result += current : result -= current

        previous = current;
    }
    return result;
}
