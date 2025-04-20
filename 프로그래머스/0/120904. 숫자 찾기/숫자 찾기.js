function solution(num, k) {
  const strNum = num.toString();
  const index = strNum.indexOf(k.toString());

  return index === -1 ? -1 : index + 1;
}
