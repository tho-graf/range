export default function range(
  fromInclusive = 0,
  toExclusive?: number,
  step = 1
): number[] {
  if (toExclusive == undefined) {
    toExclusive = fromInclusive;
    fromInclusive = 0;
  }

  const result = [];
  for (let i = fromInclusive; (toExclusive - i) * step > 0; i += step) {
    result.push(i);
  }
  return result;
}
