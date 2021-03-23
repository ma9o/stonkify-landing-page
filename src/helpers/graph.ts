const GRAPH_SIZE = 20;

export function randomNumber(minimum, maximum) {
  return Math.round(Math.random() * (maximum - minimum) + minimum);
}

export function generateGraph(source, targetY, labels) {
  const sourceX = labels.indexOf(source);

  const size = GRAPH_SIZE - sourceX - 1;

  const step = Math.log(targetY) / size;

  return Array(GRAPH_SIZE)
    .fill(null)
    .map((_, i) => {
      if (i < sourceX) return 0;

      const res = ((i - sourceX) * step) ** Math.E;

      return res + randomNumber(-(res * 0.7), res * 0.7);
    });
}

export function generateLabels(fromDate) {
  const step = (Date.now() - fromDate.getTime()) / GRAPH_SIZE;

  return Array(GRAPH_SIZE)
    .fill(null)
    .map((_, i) => {
      const res = new Date(fromDate.getTime() + i * step);

      return "'" + (res.getFullYear() - 2000);
    });
}
