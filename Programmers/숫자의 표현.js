// 출처 : 프로그래머스 연습문제 숫자의 표현
// https://programmers.co.kr/learn/courses/30/lessons/12924
// 풀이 : hogumachu
// Level 2

function solution(n) {
    let result = 0;
    let i = 1;
    let j = 0;

    for (; i <= n; i++) {
        if (i * (i + 1) >= n * 2) {
            break;
        }
    }

    for (; i <= n; i++) {
        for (; j < i; j++) {
            if (i * (i + 1) == j * (j + 1) + n * 2) {
                result += 1;
            } else if (i * (i + 1) < j * (j + 1) + n * 2) {
                break;
            }
        }
    }

    return result;
}
