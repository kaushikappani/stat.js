const sequence = (a, b, f) => {
    let seq = [];
    let newNum = a;
    for (let i = 0; i <= (b - a) / f; i++) {
        if (newNum <= b) {
            seq.push(a + i * f);
            newNum = newNum + f;
        }
    }
    return seq
};

module.exports = { sequence };