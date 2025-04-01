function solution(my_string, letter) {
    let answer = '';
    answer = my_string.split(letter).join('');
    return answer;
}