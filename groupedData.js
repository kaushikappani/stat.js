const { total } = require('./total');
const validate = (x, f) => {
    if (x.length === f.length) {
        return true;
    } else {
        return false;
    }
}
const groupedMean = (x, f) => {
    if (validate(x, f)) {
        let fx = [];
        for (let i = 0; i < x.length; i++) {
            fx.push(x[i] * f[i]);
        };
        let sigmaf = total(f);
        let sigmafx = total(fx);
        return sigmafx / sigmaf;
    };
    return undefined
};

const cumsum = (f) => {
    let cf = [f[0]];
    for (let i = 1; i < f.length; i++) {
        cf.push(cf[i - 1] + f[i])
    };
    return cf;
}

const groupedMedian = (x, f) => {
    if (validate(x, f)) {
        let n = total(f);
        let cl = cumsum(f);
        newcl = cl.filter((num) => {
            if (num >= n / 2) {
                return num
            }
        })
        let fmedian = f[x.length - newcl.length]
        let cfmedian = cl[x.length - newcl.length - 1]
        let h = x[1] - x[0];
        let l = x[x.length - newcl.length] - h / 2
        let median = l + (((n / 2) - cfmedian) / fmedian) * (x[1] - x[0]);
        return median
    }

}

module.exports = {
    groupedMean, cumsum, groupedMedian
}