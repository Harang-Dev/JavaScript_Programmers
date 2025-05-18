function solution(a, b) {
  const ab = Number(`${a}${b}`);
  const product = 2 * a * b;
  return ab >= product ? ab : product;
}