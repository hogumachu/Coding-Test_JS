// 출처 : 프로그래머스 월간 코드 챌린지 시즌3 없는 숫자 더하기
// https://programmers.co.kr/learn/courses/30/lessons/86051
// 풀이 : hogumachu
// Level 1

function solution(numbers) {
    let removed = [false, false, false, false, false, false, false, false, false, false];
    let sum = 45;

    for (let element of numbers) {
        if (removed[element]) {
            continue;
        }
        removed[element] = true;
        sum -= element;
    }
    return sum;
}
