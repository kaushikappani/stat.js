const { isodd } = require("oddoreven");
const { groupedMean, cumsum, groupedMedian } = require("./groupedData");
const { total } = require("./total");
const sum = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};
const difference = (a, b) => {
  return Math.abs(a - b);
};

const range = (a) => {
  return [Math.min(...a), Math.max(...a)];
};
///mean ///

const mean = (a) => {
  return total(a) / a.length;
};
/// median ///
const median = (a) => {
  if (a.length === 0) return 0;
  a.sort((a, b) => {
    return a - b;
  });
  l = a.length;
  var half = Math.floor(l / 2);
  if (isodd(l)) return a[half];

  return (a[half - 1] + a[half]) / 2.0;
};
// mode ///
const mode = (a) => {
  const counts = [];
  const modes = [];
  let maxIndex = 0;

  for (let i = 0; i < a.length; i++) {
    const number = a[i];
    counts[number] = (counts[number] || 0) + 1;
    if (counts[number] > maxIndex) {
      maxIndex = counts[number];
    }
  }
  if (maxIndex === 1) return [];

  counts.forEach((c, i) => {
    if (c === maxIndex) modes.push(i);
  });
  return modes;
};

const variance = (a, type) => {
  let m = mean(a);
  let stdevarr = a.map((i) => (i - m) ** 2);
  let sum = total(stdevarr);
  return type === "sample" ? sum / (a.length - 1) : sum / a.length;
};
const stdDev = (a, type) => {
  return Math.sqrt(variance(a, type));
};
const meanDev = (a) => {
  let m = mean(a);
  let meanDevarr = a.map((i) => Math.abs(i - m));
  let sum = total(meanDevarr);
  return sum / a.length;
};
const summary = (a, type) => {
  return {
    mean: mean(a),
    median: median(a),
    mode: mode(a),
    range: range(a),
    variance: variance(a, type),
    stdDev: stdDev(a, type),
    meanDev: meanDev(a),
  };
};
module.exports = {
  sum,
  subtract,
  difference,
  mean,
  total,
  median,
  summary,
  groupedMean,
  cumsum,
  groupedMedian,
};
