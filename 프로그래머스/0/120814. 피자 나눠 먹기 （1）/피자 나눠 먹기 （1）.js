function solution (n) {
    let personCount = n;
    const pizzaPiece = 7;
    let answer = Math.ceil(personCount / pizzaPiece);
    return answer;
}